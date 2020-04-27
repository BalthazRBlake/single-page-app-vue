<template>
  <div class="row">
    <div class="col-md">
      <TableEmployees />
    </div>
    <div class="col-md">
      <h1>Home</h1>
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
