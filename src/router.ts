import Vue from "vue";
import Router from "vue-router";
import SimpleLayout from './views/SimpleLayout';

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: SimpleLayout,
    },
  ]
});

