import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import NotFound from "./components/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/heroes",
      name: "heroes",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "heroes" */ "./views/Heroes.vue"),
    },
    {
      path: "/heroes/:id",
      name: "hero",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "hero" */ "./views/HeroDetails.vue"),
    },
    { path: "/404", component: NotFound },
    { path: "*", redirect: "/404" },

  ],
});