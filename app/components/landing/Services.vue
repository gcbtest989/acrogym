<template>
    <section class="services" id="services">
        <div class="grid-overlay"></div>

        <div class="container">
            <div class="services-content">

                <div class="header-block">
                    <span class="eyebrow">What We Offer</span>
                    <h2 class="title">Our Services</h2>
                    <div class="accent-line"></div>
                </div>

                <div class="carousel-wrapper">
                    <div class="services-carousel">
                        <div v-for="(service, index) in services" :key="index" class="service-card">
                            <div class="card-inner">
                                <div class="card-content">
                                    <h3 class="card-title">{{ service.title }}</h3>
                                    <p class="card-description">
                                        {{ service.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ServicesCarousel",
    setup() {
        const services = [
            {
                title: "Frontend Development",
                description: "Modern, responsive interfaces built with Vue, React and cutting-edge technologies."
            },
            {
                title: "Backend Architecture",
                description: "Robust APIs, scalable systems and secure infrastructure for your business."
            },
            {
                title: "Mobile Applications",
                description: "High-performance iOS and Android applications with seamless UX."
            },
            {
                title: "DevOps & Cloud",
                description: "CI/CD pipelines, automation, and optimized cloud deployments."
            },
            {
                title: "UI/UX Design",
                description: "Human-centered design focused on usability and engagement."
            }
        ]

        return { services }
    }
})
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.services {
    padding: 10rem 0;
    position: relative;
    overflow: hidden;

    .grid-overlay {
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba($accent-blue, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba($accent-blue, 0.05) 1px, transparent 1px);
        background-size: 50px 50px;
        mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
        pointer-events: none;
    }

    .container {
        position: relative;
        z-index: 1;
    }

    .header-block {
        margin-bottom: 4rem;

        .eyebrow {
            color: $accent-teal;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: 600;
            font-size: 0.875rem;
            display: block;
            margin-bottom: 1rem;
        }

        .title {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            font-weight: 800;

            @media (max-width: 768px) {
                font-size: 2.5rem;
            }

            @media (max-width: 600px) {
                font-size: 2rem;
            }
        }

        .accent-line {
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, $accent-blue, $accent-teal);
            border-radius: 2px;
        }
    }

    .carousel-wrapper {
        overflow: hidden;
    }

    .services-carousel {
        display: flex;
        gap: 2rem;
        overflow-x: auto;
        padding-bottom: 1rem;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .service-card {
        flex: 0 0 320px;
        overflow: visible;
        scroll-snap-align: start;
        border-radius: 24px;
        background: rgba($surface-dark, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 2.5rem;
        transition: all 0.35s ease;
        cursor: pointer;

        .card-inner {
            transition: transform 0.35s ease;
        }

        &:hover .card-inner {
            transform: scale(1.05);
        }

        .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(45deg, $text-primary, $accent-blue);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .card-description {
            font-size: 1rem;
            line-height: 1.6;
            color: $text-secondary;
        }
    }
}
</style>
