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
  getPaginatedEmployees(currentPage, perPage) {
    return apiEmployee.get("/paginated/" + currentPage + "/" + perPage);
  },
  getCountTotalEmployees() {
    return apiEmployee.get("/totalEmployees");
  },
  updateEmployee(employee) {
    return apiEmployee.put("/update/" + employee.empId, {
      empId: employee.empId,
      empName: employee.empName,
      empActive: employee.empActive,
      emp_dpId: {
        dpId: employee.emp_dpId.dpId,
        dpName: employee.emp_dpId.dpName
      }
    });
  },
  searchEmployeesByName(nameToSearch) {
    return apiEmployee.get("/search/" + nameToSearch);
  }
};
