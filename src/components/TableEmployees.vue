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
          <EmployeeDetails
            :employee="data.item"
            @refresh-table="emitRefresh"
          ></EmployeeDetails>
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
      boxTwo: "",
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
  },
  methods: {
    emitRefresh(updatedEmployee) {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxOk(
          `Employee with id: ${updatedEmployee.empId} was updated successfully`,
          {
            title: "Confirmation",
            size: "sm",
            buttonSize: "sm",
            okVariant: "outline-success",
            headerClass: "p-2 border-bottom-0",
            headerBgVariant: "dark",
            headerTextVariant: "light",
            footerClass: "p-2 border-top-0",
            footerBgVariant: "dark",
            footerTextVariant: "light",
            centered: true
          }
        )
        .then(value => {
          this.boxTwo = value;
        })
        .catch(err => {
          console.log(err);
        });
      this.$emit("emit-refresh-tbl");
    }
  }
};
</script>

<style></style>
