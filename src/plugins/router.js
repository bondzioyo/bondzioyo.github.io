import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Pages/Main.vue"),
  },
  {
    path: "/chess",
    name: "Chess",
    meta: { startPosition: "top" },
    component: () => import("../views/Pages/Chess.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to?.meta?.startPosition === "top") {
      return { top: 0 };
    }
    return false;
  },
});

export default router;
