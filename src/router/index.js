import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SearchByName from "../views/SearchByName.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/employees/:currentPage",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/",
    redirect: "/employees/1"
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/searchByName/:nameToSearch",
    name: "SearchByName",
    component: SearchByName,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
