import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TestView from "../views/TestView.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "TestView",
    component:TestView
  }
];

const router = new VueRouter({
  routes
});

export default router;
