import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import News from "../views/News.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "User",
    component: User,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;