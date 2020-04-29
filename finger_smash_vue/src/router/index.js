import Vue from "vue";
import Router from "vue-router";
import Top from "@/pages/Top";
import Sign_in from "@/pages/Sign_in";
import Sign_up from "@/pages/Sign_up";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "top",
      component: Top
    },
    {
      path: "/sign_in",
      name: "sign_in",
      component: Sign_in
    },
    {
      path: "/sign_up",
      name: "sign_up",
      component: Sign_up
    }
  ]
});
