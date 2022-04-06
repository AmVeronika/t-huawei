import axios from "axios";
const API = "https://jsonplaceholder.typicode.com/";

export const $axios = axios.create({
  baseURL: API,
});

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.defaults.headers.patch["Content-Type"] =
  "application/x-www-form-urlencoded";
