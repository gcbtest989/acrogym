// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
import {process} from "std-env";
export default defineNuxtConfig({

    devServer: {
        port: 3021
    },

    nitro: {
        prerender: {
            routes: [
                '/'
            ]
        },
    },

    devtools: { enabled: process.env.NODE_ENV === 'development' },

    modules: [
        '@pinia/nuxt',
        '@nuxt/devtools',
    ],

    css: [
        'vuetify/styles/main.sass',
        '~/assets/css/styles.scss',
        '@mdi/font/css/materialdesignicons.css'
    ],

    build: {
        transpile: ['vuetify']
    },

    ssr: true,
    //components: false,

    routeRules: {
        '/': { prerender: true },
    },

    app: {
        head: {
            title: 'Acrogym - Building Amazing Software',
            meta: [
                { name: 'description', content: 'Acrogym is a UAE-based company specializing in comprehensive software solutions, including frontend, backend, DevOps, infrastructure, and mobile services. We bring innovation and excellence to your digital projects.' }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon.jpg'
                },
                {
                    rel: 'canonical',
                    href: `https://www.akrogym.com`
                }
            ]
        }
    },

    sourcemap: {
        server: false,
        client: false,
    },

    typescript: {
        strict: true,
        shim: true
    },

    compatibilityDate: '2026-01-24'
})
