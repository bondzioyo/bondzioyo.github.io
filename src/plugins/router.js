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
    component: { template: "<div>Not found</div>" },
    beforeEnter: (to, from, next) => {
      next("/");
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: to.meta.startPosition === "top" ? 0 : savedPosition.top - 200,
    };
  },
});

export default router;
