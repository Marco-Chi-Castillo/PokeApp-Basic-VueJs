<script setup>
import CardPokemon from '@/components/cardPokemon.vue';
import { useGetData } from '@/composables/getData';
import { useFavoriteStore } from '@/store/favorite';
import { useRoute, useRouter } from 'vue-router';

const { data, loading, error, getData } = useGetData();

const route = useRoute();
const router = useRouter();
const useFavorite = useFavoriteStore();

const { add, findPoke } = useFavorite;

const back = () => {
    router.push("/pokemons");
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>

    <div class="d-flex flex-column align-items-center">
        <button @click="back()" class="btn btn-success mt-3 mb-3">back</button>
        <div v-if="loading">Loading...</div>
        <div v-if="error" class="alert alert-danger" role="alert">
            Error Server
        </div>
        <CardPokemon :name="data?.name" :img="data?.sprites.front_shiny"></CardPokemon>
        <button :disabled="findPoke(data?.name)" @click="add(data)"
            class="btn btn-success btn-sm mt-3">Favorite</button>
    </div>
</template>