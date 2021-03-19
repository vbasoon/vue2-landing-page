import VueRouter from "vue-router";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Advertising from "@/pages/Advertising/Advertising";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/advert",
      name: "Advertising",
      component: Advertising
    }
  ]
});
