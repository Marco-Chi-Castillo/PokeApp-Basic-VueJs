import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/homeView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/pokemonsView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'detailPokemon',
      component: ()=> import('../views/detailsPokemon.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/notFoundView.vue')
    }
  ]
})

export default router
