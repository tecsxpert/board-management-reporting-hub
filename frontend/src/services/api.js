import axios from "axios";

/* MOCK DATA */
const mockReports = [
  {
    id: 1,
    title: "Annual Financial Report",
    status: "Completed",
    date: "2026-04-20",
  },
  {
    id: 2,
    title: "Audit Summary",
    status: "Pending",
    date: "2026-04-22",
  },
  {
    id: 3,
    title: "Sales Performance",
    status: "Completed",
    date: "2026-04-23",
  },
];

/* TOGGLE */
const USE_MOCK = true;

const API = axios.create({
  baseURL: "http://localhost:8081/api",
});

/* Attach JWT token automatically */
API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

/* GET REPORTS */
export const getReports = async () => {

  if (USE_MOCK) {
    console.log("Using mock reports...");
    return mockReports;
  }

  const response = await API.get("/reports");
  return response.data;
};

/* CREATE REPORT */
export const createReport = async (data) => {

  if (USE_MOCK) {
    console.log("Mock report created", data);

    return {
      success: true,
      message: "Report created successfully",
    };
  }

  const response = await API.post("/reports", data);
  return response.data;
};

/* SEARCH REPORTS */
export const searchReports = async (query) => {

  if (USE_MOCK) {

    return mockReports.filter((r) =>
      r.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  const response = await API.get(`/reports/search?q=${query}`);
  return response.data;
};

/* FILTER REPORTS */
export const filterReports = async (status) => {

  if (USE_MOCK) {

    return mockReports.filter(
      (r) => r.status === status
    );
  }

  const response = await API.get(`/reports/filter?status=${status}`);
  return response.data;
};

/* UPDATE REPORT */
export const updateReport = async (id, data) => {

  if (USE_MOCK) {

    console.log(`Mock update report ${id}`, data);

    return {
      success: true,
    };
  }

  const response = await API.put(`/reports/${id}`, data);
  return response.data;
};

/* DELETE REPORT */
export const deleteReport = async (id) => {

  if (USE_MOCK) {

    console.log(`Mock delete report ${id}`);

    return {
      success: true,
    };
  }

  const response = await API.delete(`/reports/${id}`);
  return response.data;
};

export default API;