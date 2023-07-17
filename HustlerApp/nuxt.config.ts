// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/ionic", "@nuxtjs/tailwindcss"],
    // @ts-ignore
    build: {
        transpile: ['konsta'],
    },
    ssr: false
})