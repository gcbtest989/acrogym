<template>
  <section class="tech-stack" id="stack">
    <div class="container text-center">
      <div class="section-header">
        <h2 class="title">Our Favorite Tech Stack</h2>
        <p class="subtitle">We use the most modern and efficient tools to build high-end software.</p>
      </div>

      <div class="stack-grid">
        <div v-for="(tech, index) in stack" :key="index" class="tech-item">
          <div class="icon-wrapper">
            <i :class="['mdi', tech.icon]"></i>
          </div>
          <div class="tech-name">{{ tech.name }}</div>
          <div class="tech-tag">{{ tech.tag }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "TechStack",
  setup() {
    const stack = [
      { name: "Python / FastAPI", icon: "mdi-language-python", tag: "Backend" },
      { name: "Nuxt / Vue", icon: "mdi-vuejs", tag: "Web Frontend" },
      { name: "SwiftUI", icon: "mdi-apple-ios", tag: "iOS App" },
      { name: "Kotlin", icon: "mdi-android", tag: "Android App" },
      { name: "SQL", icon: "mdi-database", tag: "Database" },
      { name: "Redis", icon: "mdi-lightning-bolt", tag: "Caching" },
      { name: "Celery", icon: "mdi-sync", tag: "Task Queue" },
      { name: "Kubernetes", icon: "mdi-kubernetes", tag: "Orchestration" },
      { name: "Google Cloud", icon: "mdi-google-cloud", tag: "Infrastructure" }
    ]
    return { stack }
  }
})
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.tech-stack {
  padding: 8rem 0;
  background: $bg-dark;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);


  .text-center { text-align: center; }

  .section-header {
    margin-bottom: 5rem;
    
    .title {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      font-weight: 800;

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    .subtitle {
      font-size: 1.25rem;
      color: $text-secondary;
    }
  }

  .stack-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  .tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    padding: 2.5rem;
    background: rgba($surface-dark, 0.3);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.03);

    &:hover {
      transform: translateY(-8px);
      background: rgba($surface-dark, 0.6);
      border-color: rgba($accent-teal, 0.3);

      .icon-wrapper {
        color: $accent-teal;
        transform: scale(1.1);
      }
    }

    .icon-wrapper {
      font-size: 4rem;
      color: rgba(255, 255, 255, 0.4);
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
    }

    .tech-name {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: $text-primary;
    }

    .tech-tag {
      font-size: 0.875rem;
      color: $accent-blue;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-weight: 700;
    }
  }
}
</style>