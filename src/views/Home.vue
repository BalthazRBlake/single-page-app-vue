<template>
  <b-container>
    <b-row>
      <b-col md>
        <PagesNavBar :currentPage="currentPage"></PagesNavBar>
      </b-col>
    </b-row>
  </b-container>
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
