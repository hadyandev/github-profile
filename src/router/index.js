import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:username",
    name: "User",
    component: () => import("@/views/User.vue")
  },
  {
    path: "/:username/:repo",
    name: "Repo",
    component: () => import("@/views/Repo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
