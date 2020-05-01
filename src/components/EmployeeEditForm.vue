<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="employee-name-group"
        label="Employee Name:"
        label-for="employee-name"
      >
        <b-form-input
          id="employee-name"
          v-model="orgEmp.empName"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-checkbox
          v-model="orgEmp.empActive"
          name="is-employee-active"
          switch
        >
          is Active&nbsp;
          <b-badge v-if="orgEmp.empActive" variant="primary">YES</b-badge>
          <b-badge v-else variant="danger">NO</b-badge>
        </b-form-checkbox>
      </b-form-group>

      <b-form-group>
        <b-form-select v-model="orgEmp.emp_dpId">
          <template v-slot:first>
            <b-form-select-option :value="null" disabled>
              -- Please select a department --
            </b-form-select-option>
          </template>

          <b-form-select-option
            v-for="department in departments"
            :key="department.dpId"
            :value="department"
          >
            {{ department.dpName }}
          </b-form-select-option>
        </b-form-select>
      </b-form-group>

      <b-button type="submit" variant="outline-primary">Update</b-button>
    </b-form>
  </div>
</template>

<script>
import EmployeeService from "@/service/EmployeeService.js";
import DepartmentService from "@/service/DepartmentService.js";

export default {
  props: {
    employee: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      departments: [],
      orgEmp: Object
    };
  },
  created() {
    this.orgEmp = {
      empId: this.employee.empId,
      empName: this.employee.empName,
      empActive: this.employee.empActive,
      emp_dpId: this.employee.emp_dpId
    };

    DepartmentService.getAllDepartments()
      .then(response => {
        this.departments = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      EmployeeService.updateEmployee(this.orgEmp)
        .then(response => {
          this.$emit("hide-modal", response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style></style>
