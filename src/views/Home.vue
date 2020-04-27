<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
import EmployeeService from "@/service/EmployeeService.js";

export default {
  data() {
    return {
      employees: []
    };
  },
  created() {
    EmployeeService.getPaginatedEmployees(1, 10)
      .then((response) => {
        this.employees = response.data;
        console.log(this.employees);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
};
</script>
