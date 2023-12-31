import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/users";
import news from "./modules/news";
import product from "./modules/product";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    donatur,
    clients,
    transaksi,
    users,
    news,
    product,
  },
});

export default store;