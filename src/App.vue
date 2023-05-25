<script setup>
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/default.vue'
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <DefaultLayout>
    <TheHeader />
    <RouterView />
  </DefaultLayout>
</template>

<style scoped>
/*  */
</style>
