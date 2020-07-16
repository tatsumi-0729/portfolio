/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

console.log("Starting Rails&Vue On Webpacker");

// import Vue from "vue/dist/vue.esm";
import Vue from "vue";
import App from "../app.vue";
import router from "./router.js";
import axios from "axios";

new Vue({
  el: "#app",
  router,
  axios,
  render: (h) => h(App),
});
