import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081/api"
});

// attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
export const getReports = () => API.get("/reports");

export const createReport = (data) =>
  API.post("/reports", data);

export const searchReports = (query) =>
  API.get(`/reports/search?q=${query}`);

export const filterReports = (status) =>
  API.get(`/reports/filter?status=${status}`);

export const updateReport = (id, data) =>
  API.put(`/reports/${id}`, data);

export const deleteReport = (id) =>
  API.delete(`/reports/${id}`);
export default API;