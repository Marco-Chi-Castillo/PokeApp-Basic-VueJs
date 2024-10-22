<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        PokeApi
      </a>
      <div>
        <RouterLink to="/" class="btn btn-outline-success me-3">Home</RouterLink>
        <RouterLink to="/pokemons" class="btn btn-outline-success">Pokemons</RouterLink>
      </div>

    </div>
  </nav>

  <RouterView/>
</template>
