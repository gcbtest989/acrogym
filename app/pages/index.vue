<template>
    <div class="landing-page">
        <div class="bg-blobs">
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
            <div class="blob blob-4"></div>
            <div class="blob blob-5"></div>
        </div>

        <nav class="navbar">
            <div class="nav-container">
                <a href="#home"><img src="/img/acro-logo-simple-coloured.png" alt="Acrogym Logo" class="nav-logo" /></a>

                <!-- Hamburger button -->
                <button class="nav-toggle" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="nav-links" :class="{ open: menuOpen }">
                    <a href="#coach"    @click="menuOpen = false">The Coach</a>
                    <a href="#trust"    @click="menuOpen = false">Why Us</a>
                    <a href="#benefits" @click="menuOpen = false">Programs</a>
                    <a href="#space"    @click="menuOpen = false">Find us</a>
                    <a href="#contact"    @click="menuOpen = false">Contact</a>
                </div>
            </div>
        </nav>

        <landing-hero />
        <landing-photo-gallery />
        <landing-meet-coach />
        <landing-parents-trust />
        <landing-why-choose-gym />
        <landing-our-brand-space />
        <landing-contact/>
        <landing-ready-to-start />

        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-brand">
                        <img src="/img/acro-logo-simple-coloured.png" alt="Acrogym Logo" class="footer-logo" />
                        <p>
                            Helping children grow stronger, more confident, and fearless through movement.
                        </p>
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
import { ref } from 'vue'
import { Projects, Collaborations } from "~/assets/ts/constants";

definePageMeta({
    layout: 'naked'
})

const menuOpen = ref(false)

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
    to   { transform: translate(100px, 50px) scale(1.1); }
}

/* ── Navbar ── */
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
        max-width: 2200px;
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

/* ── Hamburger button ── */
.nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    z-index: 1001;

    span {
        display: block;
        width: 24px;
        height: 2px;
        background: $text-secondary;
        border-radius: 2px;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    &.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    &.open span:nth-child(2) { opacity: 0; }
    &.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
}

/* ── Mobile nav ── */
@media (max-width: 768px) {
    .nav-toggle {
        display: flex;
    }

    .navbar {
        padding: 1rem 0;

        .nav-links {
            position: fixed;
            top: 73px; /* navbar height */
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 0;
            background: rgba($bg-dark, 0.97);
            backdrop-filter: blur(10px);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease;


            &.open {
                max-height: 320px;
            }

            a {
                padding: 1.1rem 2rem;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                font-size: 0.875rem;
            }
        }
    }
}

/* ── Footer ── */
.footer {
    padding: 6rem 0 3rem;
    background: $bg-dark;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    .footer-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
    }

    .footer-brand {
        .footer-logo {
            height: 40px;
            margin-bottom: 1rem;
        }

        p {
            color: $text-secondary;
            font-size: 0.9375rem;
            max-width: 400px;
        }
    }

    .footer-copy {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.875rem;
    }
}
</style>