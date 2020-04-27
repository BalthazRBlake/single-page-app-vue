<template>
  <div>
    <b-table
      hover
      responsive
      :items="employees"
      :fields="fields"
      :small="small"
      :head-variant="headVariant"
    >
      <template v-slot:cell(details)>
        <b-button size="sm" variant="link">View</b-button>
      </template>
      <template v-slot:cell(empActive)="data">
        <b-td v-if="data.value" variant="info">YES</b-td>
        <b-td v-else variant="danger">NO</b-td>
      </template>
      <template v-slot:table-caption>List of employees.</template>
    </b-table>
  </div>
</template>

<script>
import EmployeeService from "@/service/EmployeeService.js";

export default {
  data() {
    return {
      fields: [
        {
          key: "details",
          label: ""
        },
        {
          key: "empId",
          label: "Id"
        },
        {
          key: "empName",
          label: "Name",
          sortable: true
        },
        {
          key: "emp_dpId.dpName",
          label: "Department"
        },
        {
          key: "empActive",
          label: "isActive"
        }
      ],
      employees: [],
      small: true,
      headVariant: "light"
    };
  },
  created() {
    EmployeeService.getPaginatedEmployees(1, 10)
      .then(response => {
        this.employees = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style></style>
