<script setup>
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/default.vue'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <DefaultLayout>
    <TheHeader />
    <RouterView />
    <TheFooter />
  </DefaultLayout>
</template>

<style scoped>
/*  */
</style>
