<template>
  <div class="overflow-auto">
    <b-pagination-nav
      v-model.number="currentPage"
      :link-gen="linkGen"
      :number-of-pages="pages"
      use-router
    ></b-pagination-nav>
    <TableEmployees :employees="employees" :isBusy="isBusy"></TableEmployees>
  </div>
</template>

<script>
import EmployeeService from "@/service/EmployeeService.js";
import TableEmployees from "@/components/TableEmployees.vue";

export default {
  components: {
    TableEmployees
  },
  data() {
    return {
      pages: 5,
      perPage: 10,
      currentPage: Number,
      employees: []
    };
  },
  created() {
    EmployeeService.getTotalEmployees()
      .then(response => {
        this.pages = Math.ceil(response.data / this.perPage);
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    linkGen(pageNum) {
      this.updateTable();
      return {
        name: "Home",
        params: {
          currentPage: pageNum,
          perPage: this.perPage
        }
      };
    },
    updateTable() {
      if (typeof this.currentPage === "number") {
        EmployeeService.getPaginatedEmployees(this.currentPage, this.perPage)
          .then(response => {
            this.employees = response.data;
          })
          .catch(error => {
            this.employees = [];
            console.log(error.response);
          });
      }
    }
  },
  computed: {
    isBusy: function() {
      return this.employees.length === 0 ? true : false;
    }
  }
};
</script>

<style></style>
