<template>
  <div>
    <b-table
      hover
      responsive
      sort-icon-left
      sticky-header="500px"
      :items="employees"
      :fields="fields"
      :small="small"
      :head-variant="headVariant"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      no-sort-reset
      :busy="isBusy"
    >
      <template v-slot:table-busy>
        <div class="text-center text-info my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(details)="data">
        <div>
          <EmployeeDetails :employee="data.item"></EmployeeDetails>
        </div>
      </template>
      <template v-slot:cell(empActive)="data">
        <b-badge v-if="data.value" variant="primary">YES</b-badge>
        <b-badge v-else variant="danger">NO</b-badge>
      </template>
    </b-table>
    <div>
      Sorting By:
      <b>{{ sortBy }}</b>
      , Sort Direction:
      <b>{{ sortDesc ? "Descending" : "Ascending" }}</b>
    </div>
  </div>
</template>

<script>
import EmployeeDetails from "@/components/EmployeeDetails.vue";

export default {
  components: {
    EmployeeDetails
  },
  props: {
    employees: Array,
    isBusy: Boolean
  },
  data() {
    return {
      sortBy: "empId",
      sortDesc: false,
      small: true,
      headVariant: "light",
      fields: [
        {
          key: "details",
          label: ""
        },
        {
          key: "empId",
          label: "Id",
          sortable: true
        },
        {
          key: "empName",
          label: "Name",
          sortable: true
        },
        {
          key: "emp_dpId.dpName",
          label: "Department",
          sortable: true
        },
        {
          key: "empActive",
          label: "isActive"
        }
      ]
    };
  }
};
</script>

<style></style>
