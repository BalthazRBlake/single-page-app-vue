<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <PagesNavBar :currentPage="currentPage"></PagesNavBar>
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
  props: ["currentPage"],
  components: {
    PagesNavBar
  }
};
</script>
