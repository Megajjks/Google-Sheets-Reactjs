import axios from "axios";
import config from "./config";

export const api = axios.create({
  baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}`,
});

export default api;
