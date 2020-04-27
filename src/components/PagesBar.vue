<template> </template>

<script>
import EmployeeService from "@/service/EmployeeService.js";

export default {
  props: {
    size: {
      type: [Number, String],
      default: 10
    }
  },
  data() {
    return {
      pages: []
    };
  },
  created() {
    EmployeeService.getTotalEmployees()
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style></style>
