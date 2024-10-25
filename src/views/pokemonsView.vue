<script setup>
import SpritPokemon from '@/components/spritPokemon.vue';
import { useGetData } from '@/composables/getData';

const { data, error, loading, getData } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");

</script>

<template>
    <div class="container mt-5">
        <div v-if="loading">Loading...</div>
        <div v-if="error" class="alert alert-danger" role="alert">
            Error Server
        </div>

        <div v-if="data">
            <div>
                <button :disabled="!data.previous" @click="getData(data.previous)" type="button"
                    class="btn btn-success me-3">Previus</button>
                <button :disabled="!data.next" @click="getData(data.next)" type="button"
                    class="btn btn-success">Next</button>
            </div>
            <div class="d-flex flex-wrap flex-row">
                <template v-for="pokemon in data?.results">
                    <SpritPokemon :name="pokemon.name"></SpritPokemon>
                </template>
            </div>
        </div>
    </div>
</template>