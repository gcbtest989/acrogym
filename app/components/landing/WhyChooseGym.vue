<template>
  <section class="why-choose-gym" id="benefits">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Benefits</span>
        <h2 class="title">Why Choose Developmental Gymnastics?</h2>
        <div class="accent-line"></div>
        <p class="subtitle">
          Our programs are designed to unlock your child's full potential in a safe, comfortable environment.
          Developmental gymnastics supports a child's overall physical and personal growth.
        </p>
      </div>

      <div class="benefits-grid">
        <div v-for="(benefit, index) in benefits" :key="index" class="benefit-card">
          <div class="icon-wrapper">
            <i :class="['mdi', benefit.icon]"></i>
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
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
      { title: "Coordination", icon: "mdi-run-fast" },
      { title: "Strength",     icon: "mdi-arm-flex" },
      { title: "Flexibility",  icon: "mdi-human-handsup" },
      { title: "Posture",      icon: "mdi-human-male" },
      { title: "Balance",      icon: "mdi-scale-balance" },
      { title: "Confidence",   icon: "mdi-medal-outline" },
      { title: "Discipline",   icon: "mdi-brain" },
      { title: "Foundation",   icon: "mdi-gymnastics" },
    ];

    return { benefits };
  }
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.why-choose-gym {
  padding: 4rem 0;
  position: relative;
  background: $bg-dark;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .container {
    position: relative;
    z-index: 1;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

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
    gap: 1.25rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .benefit-card {
      background: rgba($surface-dark, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 1.25rem 1rem;
      text-align: center;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        transform: translateY(-4px);
        border-color: rgba($accent-primary, 0.3);
        background: rgba($surface-dark, 0.7);

        .icon-wrapper {
          color: $accent-primary;
          transform: scale(1.15);
        }
      }

      .icon-wrapper {
        font-size: 2rem;
        color: $accent-tertiary;
        transition: all 0.3s ease;
        line-height: 1;
      }

      .benefit-title {
        font-size: 0.9rem;
        font-weight: 700;
        color: $text-primary;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 0;
      }
    }
  }
}
</style>