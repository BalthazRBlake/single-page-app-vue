<template>
  <b-container>
    <b-alert show dismissible>
      <h5>
        Found employees with name beginning by
        <b-badge pill variant="dark">
          {{ nameToSearch }}
        </b-badge>
      </h5>
    </b-alert>
    <TableEmployees :employees="employees"></TableEmployees>
  </b-container>
</template>

<script>
import EmployeeService from "@/service/EmployeeService.js";
import TableEmployees from "@/components/TableEmployees.vue";

export default {
  components: {
    TableEmployees
  },
  props: ["nameToSearch"],
  data() {
    return {
      employees: []
    };
  },
  created() {
    this.updateSearch();
  },
  beforeUpdate() {
    this.updateSearch();
  },
  methods: {
    updateSearch() {
      EmployeeService.searchEmployeesByName(this.nameToSearch)
        .then(response => {
          this.employees = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>
