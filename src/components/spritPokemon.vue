<script setup>
import { useGetData } from '@/composables/getData';
import { watch, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';

const { data, error, loading, getData } = useGetData();

const props = defineProps(['name']);

watchEffect(() => getData(`https://pokeapi.co/api/v2/pokemon/${props.name}`));

</script>

<template>
    <div v-if="loading">loading...</div>
    <div v-if="error" class="alert alert-danger" role="alert">
        Error Server
    </div>
    <RouterLink v-if="data" :to="`/pokemons/${data?.name}`"
        class="card mt-2 me-2 link-underline link-underline-opacity-0" style="width: 13rem;">
        <img :src="data?.sprites.front_default" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ data?.name }}</h5>
        </div>
    </RouterLink>
</template>