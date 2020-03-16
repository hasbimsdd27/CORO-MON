exports.NumberFormat = ({ number }) => {
  return new Intl.NumberFormat(["ban", "id"]).format(number);
};

exports.DateTime = ({ data }) => {
  // let Tanggal = null;
  // let Jam = null;
  // let DataArr = data.split("T");
  // Tanggal = DataArr[0];
  // Jam = DataArr[1].split(".")[0];
  // return `${Tanggal} at ${Jam} (UTC TIME)`;

  return `${new Date(1000 * data)}`;
};
