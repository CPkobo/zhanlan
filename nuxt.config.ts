import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        'bulma'
        // "~/assets/styles/app.scss"
    ],
    publicRuntimeConfig: {
        skyway: ""
    },
    privateRuntimeConfig: {
        // skyway: ""
    }
})
