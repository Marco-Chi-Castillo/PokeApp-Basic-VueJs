<script setup>
import { useGetData } from '@/composables/getData';
import { watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import CardPokemon from './cardPokemon.vue';

const { data, error, loading, getData } = useGetData();

const props = defineProps(['name']);

watchEffect(() => getData(`https://pokeapi.co/api/v2/pokemon/${props.name}`));

</script>

<template>
    <div v-if="loading">loading...</div>
    <div v-if="error" class="alert alert-danger" role="alert">
        Error Server
    </div>
    <RouterLink v-if="data" :to="`/pokemons/${data?.name}`" class="link-underline link-underline-opacity-0">
        <CardPokemon :name="data.name" :img="data?.sprites.front_default"></CardPokemon>
    </RouterLink>
</template>