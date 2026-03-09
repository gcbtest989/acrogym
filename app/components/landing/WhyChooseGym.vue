<template>
  <section class="why-choose-gym" id="benefits">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Our Philosophy</span>
        <h2 class="title">Why Choose Developmental Gymnastics?</h2>
        <div class="accent-line"></div>
        <p class="subtitle">
          Our programs are designed to unlock your child's full potential in a safe, comfortable environment.
        </p>
      </div>

      <div class="benefits-grid">
        <div v-for="(benefit, index) in benefits" :key="index" class="benefit-card">
          <div class="icon-wrapper">
            <i :class="['mdi', benefit.icon]"></i>
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-description">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WhyChooseGym",
  setup() {
    const benefits = [
      {
        title: "Physical Power",
        description: "Develops strength, flexibility, and proper posture.",
        icon: "mdi-arm-flex"
      },
      {
        title: "Coordination",
        description: "Improves balance and endurance.",
        icon: "mdi-run-fast"
      },
      {
        title: "Mental Growth",
        description: "Builds focus, discipline, and emotional management.",
        icon: "mdi-brain"
      },
      {
        title: "Confidence",
        description: "Boosts self-esteem through every new victory.",
        icon: "mdi-star-circle"
      }
    ];

    return { benefits };
  }
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.why-choose-gym {
  padding: 10rem 0;
  background: $bg-dark;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .container {
    position: relative;
    z-index: 1;
  }

  .section-header {
    text-align: center;
    margin-bottom: 5rem;

    .eyebrow {
      color: $accent-primary;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-weight: 600;
      font-size: 0.875rem;
      margin-bottom: 1rem;
      display: block;
    }

    .title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 2.3rem;
      }
    }

    .accent-line {
      width: 80px;
      height: 4px;
      margin: 1.5rem auto;
      background: linear-gradient(90deg, $accent-primary, $accent-tertiary);
      border-radius: 2px;
    }

    .subtitle {
      font-size: 1.125rem;
      color: $text-secondary;
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    .benefit-card {
      background: rgba($surface-dark, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      padding: 1.5rem;
      text-align: center;
      backdrop-filter: blur(10px);
      transition: all 0.35s ease;

      &:hover {
        transform: translateY(-5px);
        background: rgba($surface-dark, 0.6);
        border-color: rgba($accent-primary, 0.3);

        .icon-wrapper {
          color: $accent-primary;
          transform: scale(1.1);
        }
      }

      .icon-wrapper {
        font-size: 3.5rem;
        color: $accent-tertiary;
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;
      }

      .benefit-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: $text-primary;
      }

      .benefit-description {
        font-size: 1rem;
        color: $text-secondary;
        line-height: 1.6;
      }
    }
  }
}
</style>