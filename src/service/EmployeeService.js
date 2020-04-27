import axios from "axios";

const apiEmployee = axios.create({
  baseURL: "https://spa-java-api.herokuapp.com/spapp/emp",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getPaginatedEmployees(page, size) {
    return apiEmployee.get("/paginated/" + page + "/" + size);
  },
  getTotalEmployees() {
    return apiEmployee.get("/pages");
  }
};
