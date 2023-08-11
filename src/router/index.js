import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/user/Index.vue"
import UserCreate from "../views/user/Create.vue"
import News from "../views/News.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Kategori from "../views/Kategori.vue";
import Login from "../views/Login.vue";
import store from "../store/index1";
// import KategoriProduk from "../views/KategoriProduk.vue";
import  FilterPageCategory from "../views/FilterPageCategory.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: { requiresLogin: true },
  },
  {
    path: "/users/create",
    name: "UserCreate",
    component: UserCreate,
    meta: { requiresLogin: true },
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
  {
    path: "/category/:category",
    name: "FilterCategory",
    component: FilterPageCategory,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true },
  },
  // {
  //   path: "/kategoriproduk",
  //   name: "KategoriProduk",
  //   component: KategoriProduk,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
      next("/"); // redirect to home 
  } else {
      next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
      next("/login"); 
  } else {
      next();
  }
});

export default router;