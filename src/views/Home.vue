<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <PagesNavBar @emit-selected-employee="showEmployee"></PagesNavBar>
      </div>
      <!--div class="col-md">
      <h1>Home</h1>
      </div-->
    </div>
  </div>
</template>

<script>
import PagesNavBar from "@/components/PagesNavBar.vue";

export default {
  components: {
    PagesNavBar
  },
  methods: {
    showEmployee(data) {
      //console.log("Home receives   :::   ");
      console.log(data);
    }
  }
};
</script>
