<script setup>
import { useGetData } from '@/composables/getData';
import { useRoute, useRouter } from 'vue-router';

const { data, loading, error, getData } = useGetData();

const route = useRoute();
const router = useRouter();

const back = () => {
    router.push("/pokemons");
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>

    <div class="container text-center">
        <button @click="back()" class="btn btn-success mt-3 mb-3">back</button>
        <div v-if="loading">Loading...</div>
        <div v-if="error" class="alert alert-danger" role="alert">
            Error Server
        </div>
        <div v-if="data" class="card" style="width: 15rem;">
            <h5 class="card-header">{{ data.name }}</h5>
            <img :src="data.sprites?.front_shiny" class="card-img-top" alt="...">
        </div>
    </div>
</template>