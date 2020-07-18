import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "./component/profile.vue";
import Blog from "./component/blog.vue";
import Reference from "./component/reference.vue";
import Archive from "./component/archive.vue";
import Contact from "./component/contact.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Profile", component: Profile },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/reference", name: "Reference", component: Reference },
  { path: "/archive", name: "Archive", component: Archive },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

export default router;
