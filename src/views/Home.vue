<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <TableEmployees page="1" size="10"></TableEmployees>
      </div>
      <!--div class="col-md">
      <h1>Home</h1>
    </div-->
    </div>
  </div>
</template>

<script>
import TableEmployees from "@/components/TableEmployees.vue";

export default {
  components: {
    TableEmployees
  }
};
</script>
