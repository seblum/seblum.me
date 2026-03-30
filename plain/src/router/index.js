import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    meta: {
      title: "Main",
    },
    component: Main,
  },
  {
    path: "/mlops",
    name: "MLOps",
    meta: {
      title: "MLOps Engineering",
    },
    beforeEnter() {
      window.location.href = "https://seblum.github.io/mlops-engineering-book/";
    }
  },
  {
    path: "/synology",
    name: "Synology",
    meta: {
      title: "Synology",
    },
    beforeEnter() {
      window.location.href = "https://synology-seblum.de8.quickconnect.to/";
    }
  },
  {
    path: "*",
    name: "NotFound",
    meta: {
      title: "404",
    },
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
});

router.afterEach(() => {
  document.title = "Sebastian Blum";
});

export default router;
