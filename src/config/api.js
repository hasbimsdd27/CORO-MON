import axios from "axios";
import { apiUrl } from "./constants";
export const API = axios.create({
  baseURL: apiUrl
});
