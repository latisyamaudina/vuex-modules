import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import News from "../views/News.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Kategori from "../views/Kategori.vue";

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
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/product/:id",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;