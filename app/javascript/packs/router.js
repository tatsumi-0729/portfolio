import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./component/top.vue";
import Contact from "./component/contact.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Top", component: Top },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

export default router;
