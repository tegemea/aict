<script setup>
import { useTheme } from 'vuetify/lib/framework.mjs';
import { watch, ref } from 'vue';

const theme = useTheme();
const themeIcon = ref('mdi-moon-waxing-crescent')

const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
watch(
    () => theme.global.name.value,
    newTheme => themeIcon.value = newTheme === 'light' ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny',
    { deep: true }
)
</script>

<template>
    <VToolbar color="transparent">
        <VToolbarTitle title="Arusha ICT Society">
            <VImg cover width="200" src="./src/assets/images/logo.svg" />
        </VToolbarTitle>
        <VBtn :ripple="false" cols="auto" @click.prevent="toggleTheme" class="mx-5" variant="plain"
            title="Toggle Dark / Light modes">
            <VIcon :icon="themeIcon" />
        </VBtn>
        <RouterLink to="/" class="text-decoration-none mx-3">
            <VBtn elevation="4">
                <span>Home</span>
            </VBtn>
        </RouterLink>
        <RouterLink to="/register" class="text-decoration-none mx-3">
            <VBtn elevation="4">
                <span>Register</span>
            </VBtn>
        </RouterLink>
        <RouterLink to="/members" class="text-decoration-none mx-3">
            <VBtn elevation="4">
                <span>Members</span>
            </VBtn>
        </RouterLink>
    </VToolbar>
</template>