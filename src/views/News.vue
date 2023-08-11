<template>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b">Fetch KAI</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">Code</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">City</th>
                    <th class="px-4 py-2">CityName</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="news in getNews" :key="news.id">
                    <td class="border px-4 py-2">{{ news.code }}</td>
                    <td class="border px-4 py-2">{{ news.name }}</td>
                    <td class="border px-4 py-2">{{ news.city }}</td>
                    <td class="border px-4 py-2">{{ news.cityname }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('news', ['getNews']),
    },
    methods: {
        ...mapActions('news', ['fetchNews']),
    },
    created() {
        this.fetchNews();
    },
}
</script>