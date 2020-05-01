import axios from "axios";

const apiDepartment = axios.create({
  baseURL: "https://spa-java-api.herokuapp.com/spapp/dep",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getAllDepartments() {
    return apiDepartment.get("/all");
  }
};
