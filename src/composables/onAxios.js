import axios from "axios";

export const apiCleant = axios.create({
  baseURL: "https://book-webflow-chi.vercel.app",
  timeout: 4000,
});
