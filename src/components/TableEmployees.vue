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
        <b-button @click="employeeDetails(data)" size="sm" variant="link">
          View
        </b-button>
      </template>
      <template v-slot:cell(empActive)="data">
        <b-td v-if="data.value" variant="info">YES</b-td>
        <b-td v-else variant="danger">NO</b-td>
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
export default {
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
          label: "Department"
        },
        {
          key: "empActive",
          label: "isActive"
        }
      ]
    };
  },
  methods: {
    employeeDetails(data) {
      //console.log("Table emits   :::   ");console.log(data);
      this.$emit("emit-selected-employee", data.item);
    }
  }
};
</script>

<style></style>
