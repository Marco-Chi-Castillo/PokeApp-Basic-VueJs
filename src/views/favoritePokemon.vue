<script setup>
import CardPokemon from '@/components/cardPokemon.vue';
import { useFavoriteStore } from '@/store/favorite';
import { storeToRefs } from 'pinia';

const useFavorite = useFavoriteStore();

const { remove } = useFavorite;
const { favorites } = storeToRefs(useFavorite);

</script>

<template>
    <div class="container">
        <h1>Favorite pokemon</h1>
        <div class="d-flex flex-wrap flex-row">
            <template v-for="poke in favorites">
                <div>
                    <RouterLink v-if="poke" :to="`/pokemons/${poke?.name}`" class="link-underline link-underline-opacity-0">
                        <CardPokemon :name="poke.name" :img="poke?.sprites.front_default"></CardPokemon>
                    </RouterLink>
                    <button @click="remove(poke.id)" class="btn btn-danger btn-sm mt-3">Delete</button>
                </div>

            </template>
        </div>


    </div>
</template>