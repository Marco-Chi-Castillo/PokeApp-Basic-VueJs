<script setup>
const props = defineProps(['name', 'img']);

</script>

<template>
    <div class="card mt-2 me-2" style="width: 13rem;">
        <h5 class="card-header">{{ name }}</h5>
        <img :src="img" class="card-img-top" alt="...">
    </div>
</template>