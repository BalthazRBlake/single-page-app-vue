<template>
  <div class="overflow-auto">
    <b-pagination-nav
      :link-gen="linkGen"
      :number-of-pages="pages"
      use-router
      first-number
      last-number
      align="center"
      pills
    >
    </b-pagination-nav>

    <div class="float-right">
      <span class="badge badge-dark">PerPage: </span>
      <select v-model.number="perPage">
        <option>5</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>

    <TableEmployees
      :employees="employees"
      :isBusy="isBusy"
      @emit-refresh-tbl="linkGen"
    ></TableEmployees>
  </div>
</template>

<script>
import EmployeeService from "@/service/EmployeeService.js";
import TableEmployees from "@/components/TableEmployees.vue";

export default {
  props: {
    currentPage: {
      type: [Number, String],
      required: true
    }
  },
  components: {
    TableEmployees
  },
  data() {
    return {
      perPage: 10,
      pages: 5,
      employees: []
    };
  },
  beforeUpdate() {
    EmployeeService.getTotalEmployees()
      .then(response => {
        this.pages = Math.ceil(response.data / this.perPage);
      })
      .catch(error => {
        console.log(error.response);
        this.pages = 1;
      });
  },
  methods: {
    linkGen(pageNum) {
      this.updateTable();
      return {
        name: "Home",
        params: { currentPage: pageNum }
      };
    },
    updateTable() {
      EmployeeService.getPaginatedEmployees(this.currentPage, this.perPage)
        .then(response => {
          this.employees = response.data;
        })
        .catch(error => {
          this.employees = [];
          console.log(error.response);
        });
    }
  },
  computed: {
    isBusy() {
      return this.employees.length === 0 ? true : false;
    }
  }
};
</script>

<style></style>
