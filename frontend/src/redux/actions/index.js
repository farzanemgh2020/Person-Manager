import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8002",
  headers: {
    "Content-Type": "application/json"
  }
})
