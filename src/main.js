import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components, directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.provide('baseURL', 'http://192.168.100.10:5175')

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
