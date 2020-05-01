<template>
  <div id="app">
    <NavBar />
    <br /><br /><br /><br />
    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
