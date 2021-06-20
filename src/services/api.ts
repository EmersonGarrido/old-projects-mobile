import axios from "axios";

const api = axios.create({
  baseURL: "https://rareportsapi.herokuapp.com",
});

export default api;
