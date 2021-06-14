import axios from "axios";

const BASE_URL = "https://app-api.theapollo.com/api/";

const http = axios.create({
  baseURL: BASE_URL
});

export default http;