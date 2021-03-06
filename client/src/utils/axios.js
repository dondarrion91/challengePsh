import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 1000,
});
