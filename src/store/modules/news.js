import axios from "axios";

const news = {
    namespaced: true,
    state: {
        newsData: [],
    },
    getters: {
        getNews: (state) => state.newsData,
    },
    actions: {
        async fetchNews ({ commit }) {
            try {
                const data = await axios.get(
                    "https://booking.kai.id/api/stations2"
                );
                commit("SET_NEWS" ,data.data);
            } catch(error) {
                alert (error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_NEWS(state, news) {
            state.newsData = news
        },
    },
};

export default news;