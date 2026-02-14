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
        <landing-about />
        <landing-partnerships />
        <landing-portfolio />
        <landing-tech-stack />
        <landing-what-we-offer />
        <landing-contact />

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

useSeoMeta({
    description: `Acrogym is a premier UAE-based software engineering firm specializing in high-performance frontend, backend, DevOps, and cloud infrastructure solutions. We build and maintain world-class digital products for global partners like Shining Apps and TCK Systems. Expert in Python, Nuxt, Kubernetes, and Mobile App Development.`,
    title: `Acrogym | Elite Software Engineering UAE`,
    ogTitle: `Acrogym | Elite Software Engineering UAE`,
    ogDescription: `High-end software engineering, Kubernetes orchestration, and digital product development based in Dubai. Building the future of digital intelligence.`,
    ogImage: `https://www.akrogym.com/img/tckr-labs-og.jpg`,
    ogUrl: useRoute().fullPath,
    twitterTitle: `Acrogym | Elite Software Engineering UAE`,
    twitterDescription: `Premier software engineering firm in Dubai, UAE. Specializing in Python, Nuxt, Kubernetes, and Cloud Infrastructure.`,
    twitterImage:`https://www.akrogym.com/img/tckr-labs-og.jpg`,
    twitterCard: "summary_large_image",
    keywords: "Software Engineering UAE, Dubai Software Company, DevOps Dubai, Kubernetes Management, Python Development UAE, NuxtJS Experts, Mobile App Development Dubai, Acrogym, Shining Apps, TCK Systems, UAE Tech Hub, Cloud Infrastructure Dubai"
})

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "https://www.akrogym.com",
                "logo": "https://www.akrogym.com/img/tckr_logo.png",
                "name": "Acrogym FZCO",
                "description": "Acrogym is a premier UAE-based software engineering company specializing in comprehensive software solutions, including frontend, backend, DevOps, infrastructure, and mobile services.",
                "email": "info@acrogym.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Business Bay, Dubai",
                    "addressLocality": "Dubai",
                    "addressCountry": "AE",
                    "addressRegion": "Dubai",
                    "postalCode": "00000"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+6666666666",
                    "contactType": "customer service",
                    "areaServed": "Global",
                    "availableLanguage": ["English", "Spanish"]
                }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "@id": "https://www.akrogym.com",
                "name": "Acrogym Projects and Collaborations",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "item": { "@id": "https://useofenglishpro.com" } },
                    { "@type": "ListItem", "position": 2, "item": { "@id": "https://useofenglish.ai" } },
                    { "@type": "ListItem", "position": 3, "item": { "@id": "https://englishreels.app" } },
                    { "@type": "ListItem", "position": 4, "item": { "@id": "https://www.cambridgeenglish.app" } },
                    { "@type": "ListItem", "position": 5, "item": { "@id": "https://englishapps.app" } },
                    { "@type": "ListItem", "position": 6, "item": { "@id": "https://www.cambridgexam.com" } },
                    { "@type": "ListItem", "position": 7, "item": { "@id": "https://englishapps.app/b1/pet/preliminary-english-test" } },
                    { "@type": "ListItem", "position": 8, "item": { "@id": "https://englishapps.app/b2/fce/first-certificate-of-english" } },
                    { "@type": "ListItem", "position": 9, "item": { "@id": "https://englishapps.app/c1/cae/advanced-certificate-of-english" } },
                    { "@type": "ListItem", "position": 10, "item": { "@id": "https://englishapps.app/c2/cpe/certificate-of-proficiency-in-english" } },
                    { "@type": "ListItem", "position": 11, "item": { "@id": "https://englishapps.app/gr/grammar/english-grammar" } },
                    { "@type": "ListItem", "position": 12, "item": { "@id": "https://englishapps.app/vo/vocabulary/english-vocabulary" } },
                    { "@type": "ListItem", "position": 13, "item": { "@id": "https://apps.apple.com/app/momentum-goal-planner/id6754932143" } }, // No web link
                    { "@type": "ListItem", "position": 14, "item": { "@id": "https://apps.apple.com/app/ielts-cambridge-mini-exercises/id6746192044" } }, // No web link
                    { "@type": "ListItem", "position": 15, "item": { "@id": "https://www.cambridgexam.com/b1/pet/preliminary-english-test" } },
                    { "@type": "ListItem", "position": 16, "item": { "@id": "https://www.cambridgexam.com/b2/fce/first-certificate-of-english" } },
                    { "@type": "ListItem", "position": 17, "item": { "@id": "https://www.cambridgexam.com/c1/cae/advanced-certificate-of-english" } },
                    { "@type": "ListItem", "position": 18, "item": { "@id": "https://www.cambridgexam.com/c2/cpe/certificate-of-proficiency-in-english" } },
                    { "@type": "ListItem", "position": 19, "item": { "@id": "https://apps.apple.com/app/goal-planner-pro/id6480344949" } }, // No web link
                    { "@type": "ListItem", "position": 20, "item": { "@id": "https://ggportal.xyz" } },
                    { "@type": "ListItem", "position": 21, "item": { "@id": "https://gigapipe.com" } },
                    { "@type": "ListItem", "position": 22, "item": { "@id": "https://www.clovrlabs.com" } },
                ]
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Use of English PRO",
                "description": "Premium preparation app for Cambridge English exams (B1, B2, C1, C2) featuring unlimited practice papers and real-time feedback.",
                "url": "https://useofenglishpro.com",
                "image": "https://www.akrogym.com/img/projects/useofenglishpro.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": ["B1 PET", "B2 FCE", "C1 CAE", "C2 CPE"],
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Use of English AI",
                "description": "AI-powered platform for generating unlimited Cambridge English Use of English and Reading exercises.",
                "url": "https://useofenglish.ai",
                "image": "https://www.akrogym.com/img/projects/AI_icon.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": ["B1 PET", "B2 FCE", "C1 CAE", "C2 CPE"],
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "English Reels",
                "description": "TikTok-style mobile app for learning English through short, interactive video challenges.",
                "url": "https://englishreels.app",
                "image": "https://www.akrogym.com/img/projects/reels_icon.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Cambridge English App Prep",
                "description": "Comprehensive Cambridge English exam platform built with FastAPI, SwiftUI, and Nuxt.",
                "url": "https://www.cambridgeenglish.app",
                "image": "https://www.akrogym.com/img/projects/cambridge_app.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Cambridge English Apps",
                "description": "Versatile mobile and web apps for grammar, vocabulary, and exam prep across all Cambridge levels.",
                "url": "https://englishapps.app",
                "image": "https://www.akrogym.com/img/projects/appsapp.png",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": `Cambridge B1 English Exam Simulator WebApp`,
                "description": `Cambridge English Exam Practice for Preliminary English Test B1 (PET) - Get unlimited exams and papers foe endless practice.`,
                "url": `https://www.cambridgexam.com/b1/pet/preliminary-english-test`,
                "image": `https://cambridgexam.com/img/logos/b1.jpg`,
                "applicationCategory": "EducationalApplication",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": 4.9,
                    "ratingCount": 3125
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0.00",
                    "priceCurrency": "USD"
                },
                "learningResourceType": [
                    "Practice Cambridge English Exam",
                    "Cambridge English B1",
                    "Cambridge English PET",
                    "Preliminary English Test"
                ],
                "operatingSystem": "Web",
                "educationalLevel": [`B1` , `PET`, `Preliminary English Test`],
                "teaches": ["Reading","Writing", "Listening", "Use of English", "Cambridge English"],
                "publisher": {
                    "@type": "Organization",
                    "name": "Acrogym FZCO",
                    "url": "https://www.akrogym.com"
                },
                "inLanguage": "en"
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Cambridge Exam Simulator Web",
                "description": "Complete series of Cambridge English exam simulators for Web, iOS, and Android.",
                "url": "https://www.cambridgexam.com",
                "image": "https://www.akrogym.com/img/projects/simulator_logo.png",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "English B1 App",
                "description": "Targeted practice for Cambridge B1 Preliminary (PET) exam.",
                "url": "https://englishapps.app/b1/pet/preliminary-english-test",
                "image": "https://www.akrogym.com/img/projects/mini_app_b1.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": "B1 PET",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "English B2 App",
                "description": "Targeted practice for Cambridge B2 First (FCE) exam.",
                "url": "https://englishapps.app/b2/fce/first-certificate-of-english",
                "image": "https://www.akrogym.com/img/projects/mini_app_b2.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": "B2 FCE",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "English C1 App",
                "description": "Targeted practice for Cambridge C1 Advanced (CAE) exam.",
                "url": "https://englishapps.app/c1/cae/advanced-certificate-of-english",
                "image": "https://www.akrogym.com/img/projects/mini_app_c1.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": "C1 CAE",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "English C2 App",
                "description": "Targeted practice for Cambridge C2 Proficiency (CPE) exam.",
                "url": "https://englishapps.app/c2/cpe/certificate-of-proficiency-in-english",
                "image": "https://www.akrogym.com/img/projects/mini_app_c2.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": "C2 CPE",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "English Grammar PRO",
                "description": "Comprehensive English grammar practice app for all levels.",
                "url": "https://englishapps.app/gr/grammar/english-grammar",
                "image": "https://www.akrogym.com/img/projects/mini_app_gr.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "English Vocabulary PRO",
                "description": "Comprehensive English vocabulary practice app for all levels.",
                "url": "https://englishapps.app/vo/vocabulary/english-vocabulary",
                "image": "https://www.akrogym.com/img/projects/mini_app_vo.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication"],
                "name": "Momentum Goal Planner",
                "description": "Goal-tracking application built with FastAPI, Kubernetes, and SwiftUI.",
                "url": "https://apps.apple.com/app/momentum-goal-planner/id6754932143",
                "image": "https://www.akrogym.com/img/projects/momentum.jpg",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "iOS",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Cambridge English Shorts",
                "description": "English learning app featuring short interactive exercises for IELTS and Cambridge prep.",
                "url": "https://apps.apple.com/app/ielts-cambridge-mini-exercises/id6746192044",
                "image": "https://www.akrogym.com/img/projects/shorts.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "iOS, Android",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Cambridge B1 Exam Simulator",
                "description": "Complete exam simulator for Cambridge B1 Preliminary (PET).",
                "url": "https://www.cambridgexam.com/b1/pet/preliminary-english-test",
                "image": "https://www.akrogym.com/img/projects/b1_logo.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": "B1 PET",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Cambridge B2 Exam Simulator",
                "description": "Complete exam simulator for Cambridge B2 First (FCE).",
                "url": "https://www.cambridgexam.com/b2/fce/first-certificate-of-english",
                "image": "https://www.akrogym.com/img/projects/b2_logo.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": "B2 FCE",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Cambridge C1 Exam Simulator",
                "description": "Complete exam simulator for Cambridge C1 Advanced (CAE).",
                "url": "https://www.cambridgexam.com/c1/cae/advanced-certificate-of-english",
                "image": "https://www.akrogym.com/img/projects/c1_logo.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": "C1 CAE",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LearningResource"],
                "name": "Cambridge C2 Exam Simulator",
                "description": "Complete exam simulator for Cambridge C2 Proficiency (CPE).",
                "url": "https://www.cambridgexam.com/c2/cpe/certificate-of-proficiency-in-english",
                "image": "https://www.akrogym.com/img/projects/c2_logo.jpg",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web, iOS, Android",
                "educationalLevel": "C2 CPE",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication"],
                "name": "Goal Planner PRO",
                "description": "Goal-tracking application helping users break down dreams into actionable steps.",
                "url": "https://apps.apple.com/app/goal-planner-pro/id6480344949",
                "image": "https://www.akrogym.com/img/projects/lightmydream.jpg",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "iOS",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "GGPortal Tribes",
                "description": "Gaming Social Network with Websocket API and GRPC support.",
                "url": "https://shiningapps.com",
                "image": "https://www.akrogym.com/img/projects/tribes_logo.jpg",
                "applicationCategory": "SocialNetworkingApplication",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Gigapipe",
                "description": "Clickhouse-based database analytics platform.",
                "url": "https://shiningapps.com",
                "image": "https://www.akrogym.com/img/projects/gigapipe_logo.jpg",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Clovr Labs",
                "description": "Secure financial backend services leveraging AI models.",
                "url": "https://shiningapps.com",
                "image": "https://www.akrogym.com/img/projects/clovrlabs_icon.jpg",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "Web",
                "publisher": { "@type": "Organization", "name": "Acrogym FZCO" }
            })
        },
    ]
})
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
