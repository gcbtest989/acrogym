// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
import { process } from "std-env";
export default defineNuxtConfig({

    devServer: {
        port: 3021
    },

    vite: {
        assetsInclude: ['**/*.mp4']
    },

    nitro: {
        prerender: {
            routes: [
                '/',
                '/privacy'
            ]
        },
    },

    // Google Analytics 4 — read by app/plugins/gtag.client.ts.
    // Measurement ID is public (appears in page source), so it's fine in the repo.
    // The live site is built from this repo by the hosting Vercel project, so the
    // ID must live here in code (not as a dashboard env var we can't reach).
    runtimeConfig: {
        public: {
            gtagId: process.env.NUXT_PUBLIC_GTAG_ID || 'G-PMEXF9N7SS'
        }
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
        '/privacy': { prerender: true },
        // short marketing link for the Instagram bio → opens the popup + tags lead source=instagram
        '/book': { redirect: '/?acroform=show&utm_source=instagram' },
    },

    app: {
        head: {
            title: 'Acrogym',
            meta: [
                { name: 'description', content: 'Developmental gymnastics & Professional acrobatics in Qatar.' }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon.png'
                },
                {
                    rel: 'canonical',
                    href: `https://www.acrogym.org`
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
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
