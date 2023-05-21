import axios from "axios";

let url;

if (process.env.ENV === "development") url = "http://localhost:5000/";
else url = "https://clothing-api.onrender.com/";

const axiosInstance = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
