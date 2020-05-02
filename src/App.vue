<template>
  <div id="app">
    <NavBar />
    <br /><br /><br /><br />
    <router-view />
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
