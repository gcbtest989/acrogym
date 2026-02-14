<template>
    <web-loader v-show="loading" />
    <div v-show="!loading" class="landing-page">
        <div class="bg-blobs">
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
            <div class="blob blob-4"></div>
            <div class="blob blob-5"></div>
        </div>
        <nav class="navbar">
            <div class="nav-container">
                <a href="#home"><img src="/img/tckr_logo.png" alt="TCKR Logo" class="nav-logo" /></a>
                <div class="nav-links" v-if="$vuetify.display.mdAndUp">
                    <a href="#about">About</a>
                    <a href="#partnerships">Partenrships</a> <!-- dd -->
                    <a href="#projects">Projects</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="nav-links" v-else>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>

        <landing-front />
        <!-- <landing-about />
        <landing-partnerships />
        <landing-portfolio />
        <landing-tech-stack />
        <landing-what-we-offer />
        <landing-contact /> -->

        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-brand">
                        <img src="/img/tckr_logo.png" alt="TCKR Logo" class="footer-logo" />
                        <p>Building the future with intelligent software solutions.</p>
                    </div>
                    <div class="footer-copy">
                        &copy; {{ new Date().getFullYear() }} Acrogym FZCO. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">

import { Projects, Collaborations } from "~/assets/ts/constants";

definePageMeta({
    layout: 'naked'
})

const projects = Projects
const collaborations = Collaborations

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.jpg'
        }
    ]
})

// useSeoMeta({
//     description: `Acrogym is a premier UAE-based software engineering firm specializing in high-performance frontend, backend, DevOps, and cloud infrastructure solutions. We build and maintain world-class digital products for global partners like Shining Apps and TCK Systems. Expert in Python, Nuxt, Kubernetes, and Mobile App Development.`,
//     title: `Acrogym | Elite Software Engineering UAE`,
//     ogTitle: `Acrogym | Elite Software Engineering UAE`,
//     ogDescription: `High-end software engineering, Kubernetes orchestration, and digital product development based in Dubai. Building the future of digital intelligence.`,
//     ogImage: `https://www.akrogym.com/img/tckr-labs-og.jpg`,
//     ogUrl: useRoute().fullPath,
//     twitterTitle: `Acrogym | Elite Software Engineering UAE`,
//     twitterDescription: `Premier software engineering firm in Dubai, UAE. Specializing in Python, Nuxt, Kubernetes, and Cloud Infrastructure.`,
//     twitterImage:`https://www.akrogym.com/img/tckr-labs-og.jpg`,
//     twitterCard: "summary_large_image",
//     keywords: "Software Engineering UAE, Dubai Software Company, DevOps Dubai, Kubernetes Management, Python Development UAE, NuxtJS Experts, Mobile App Development Dubai, Acrogym, Shining Apps, TCK Systems, UAE Tech Hub, Cloud Infrastructure Dubai"
// })
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "index",

    data() {
        return {
            loading: true
        }
    },

    async mounted() {
        setTimeout(() => {
            this.loading = false
        }, 1500)
    }

})
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.landing-page {
    background-color: $bg-dark;
    position: relative;
    overflow: hidden;
}

.bg-blobs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;

    .blob {
        position: absolute;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.15;
        animation: float 20s infinite alternate;
    }

    .blob-1 {
        background: $accent-blue;
        top: -10%;
        left: -10%;
    }

    .blob-2 {
        background: $accent-purple;
        bottom: 20%;
        right: -10%;
        animation-delay: -5s;
    }

    .blob-3 {
        background: $accent-teal;
        top: 60%;
        left: 30%;
        animation-delay: -10s;
    }

    .blob-4 {
        background: $accent-blue;
        top: 40%;
        right: 10%;
        animation-delay: -3s;
    }

    .blob-5 {
        background: $accent-purple;
        top: 80%;
        left: 60%;
        animation-delay: -15s;
    }
}

@keyframes float {
    from { transform: translate(0, 0) scale(1); }
    to { transform: translate(100px, 50px) scale(1.1); }
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 1.5rem 0;
    background: rgba($bg-dark, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-logo {
        height: 40px;
        width: auto;
    }

    .nav-links {
        display: flex;
        gap: 2.5rem;

        a {
            color: $text-secondary;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9375rem;
            transition: color 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.1em;

            &:hover {
                color: $accent-blue;
            }
        }
    }
}

.footer {
    padding: 6rem 0 3rem;
    background: $bg-dark;
    border-top: 1px solid rgba(255, 255, 255, 0.05);


    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;

        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
        }
    }

    .footer-brand {
        .footer-logo {
            height: 40px;
            margin-bottom: 1rem;
        }
        p {
            color: $text-secondary;
            font-size: 0.9375rem;
        }
    }

    .footer-copy {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.875rem;
    }
}
</style>
