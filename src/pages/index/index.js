import React, { useEffect, useState } from "react";
import Bacteria from "../../image/bacteria.png";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getGlobalData, getDataCountry } from "../../_actions/globalData";
import { NumberFormat, DateTime } from "../../utils/extra";
import Loading from "../../utils/loading";
import Location from "../../image/pin.png";
import Clock from "../../image/clock.png";
import Note from "../../image/notepad.png";
import Doctor from "../../image/doctor.png";
import Theme from "../../image/theme.png";
import Death from "../../image/death.png";
import Countries from "../../utils/countries.json";
const Index = props => {
  useEffect(() => {
    props.getGlobalData();
  }, []);

  const darkGridMode = {
    background: "#222",
    color: "#ecf0f1"
  };
  const darkBlocksMode = {
    background: "#333",
    color: "#ecf0f1"
  };

  const lightGridMode = {
    color: "#222"
  };
  const lightBlocksMode = {
    background: "#ecf0f1",
    color: "#222"
  };

  const HandleChange = (e, value) => {
    e.preventDefault();
    if (value === "world") {
      props.getGlobalData();
    } else {
      props.getDataCountry(value);
    }
    setCountry(value);
  };
  const GlobalData = props.GlobalData.data;
  const [themeGrid, setThemeGrid] = useState(lightGridMode);
  const [themeBlock, setThemeBlock] = useState(lightBlocksMode);
  const [country, setCountry] = useState("world");
  const [theme, setTheme] = useState(false);
  const APPtheme = (e, value) => {
    if (value === true) {
      setThemeBlock(darkBlocksMode);
      setThemeGrid(darkGridMode);

      setTheme(true);
    } else {
      setThemeBlock(lightBlocksMode);
      setThemeGrid(lightGridMode);

      setTheme(false);
    }
  };

  return props.GlobalData.loading || !props.GlobalData.data ? (
    <Loading />
  ) : (
    <div className="grid" style={themeGrid}>
      <div className="blocks" style={themeBlock}>
        <img
          className="image"
          src={Bacteria}
          style={{ marginBottom: "-2rem" }}
          alt="123"
        ></img>
        <h2 style={{ marginBottom: "-2rem" }}>CORO-MON</h2>
        <p style={{ textAlign: "center" }}>
          Simple Web for monitoring Corona Impact from all over the world
        </p>
        <p style={{ fontSize: "10px" }}>
          Made with ❤️ From ReactJs By Hasbi Musaddad
        </p>
      </div>

      <div className="blocks" style={themeBlock}>
        <img
          className="image-small"
          src={Location}
          style={{ marginBottom: "-2rem" }}
          alt="123"
        ></img>
        <h2 style={{ marginBottom: "-2rem" }}>Country</h2>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Select Country</Form.Label>
          <Form.Control
            as="select"
            value={country}
            onChange={e => HandleChange(e, e.target.value)}
          >
            <option value="world">World</option>
            {Countries.map((item, index) => (
              <option key={index} value={item.code}>
                {item.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </div>
      <div className="blocks" style={themeBlock}>
        <img
          className="image-small"
          src={Note}
          style={{ marginBottom: "-3rem" }}
          alt="123"
        ></img>
        <h2 style={{ marginBottom: "-3rem" }}>Confirmed</h2>
        {GlobalData.confirmed ? (
          <NumberFormat number={GlobalData.confirmed.value} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="blocks" style={themeBlock}>
        <img
          className="image-small"
          src={Doctor}
          style={{ marginBottom: "-3rem" }}
          alt="123"
        ></img>
        <h2 style={{ marginBottom: "-3rem" }}>Recovered</h2>
        {GlobalData.confirmed ? (
          <NumberFormat number={GlobalData.recovered.value} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="blocks" style={themeBlock}>
        <img
          className="image-small"
          src={Death}
          style={{ marginBottom: "-3rem" }}
          alt="123"
        ></img>
        <h2 style={{ marginBottom: "-3rem" }}>Deaths</h2>
        {GlobalData.confirmed ? (
          <NumberFormat number={GlobalData.deaths.value} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="blocks" style={themeBlock}>
        <img
          className="image-small"
          src={Clock}
          style={{ marginBottom: "-3rem" }}
          alt="123"
        ></img>
        <h2 style={{ marginBottom: "-3rem" }}>Last Update</h2>
        {GlobalData.confirmed ? (
          <DateTime data={GlobalData.lastUpdate} />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="blocks" style={themeBlock}>
        <img
          className="image-small"
          src={Theme}
          style={{ marginBottom: "-3rem" }}
          alt="123"
        ></img>
        <h2 style={{ marginBottom: "-3rem" }}>Theme</h2>
        <button
          className="button-custom"
          onClick={e => (theme ? APPtheme(e, false) : APPtheme(e, true))}
        >
          {theme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="blocks" style={themeBlock}>
        <img
          className="image-graphics"
          src="https://covid19.mathdro.id/api/og"
          style={{ marginBottom: "-3rem" }}
          alt="123"
        ></img>
        <p>Global Graphics</p>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    GlobalData: state.GlobalData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGlobalData: () => dispatch(getGlobalData()),
    getDataCountry: value => dispatch(getDataCountry(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
