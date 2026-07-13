import axios from "axios";

export const apiCleant = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 4000,
});
