import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

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
    },
  },
  {
    path: "/synology",
    name: "Synology",
    meta: {
      title: "Synology",
    },
    beforeEnter() {
      window.location.href = "https://synology-seblum.de8.quickconnect.to/";
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {
      title: "404",
    },
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.afterEach(() => {
  document.title = "Sebastian Blum";
});

export default router;
