<template>
  <section class="training-programs" id="programs">
    <div class="grid-overlay"></div>
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Our Training Programs</span>
        <h2 class="title">The Right Path For Every Child</h2>
        <div class="accent-line"></div>
        <p class="subtitle">
          We offer several training formats tailored to each child's age and level.
          The most suitable format is selected based on each child's needs and goals.
        </p>
      </div>

      <div class="programs-list">
        <div v-for="(program, index) in programs" :key="index" class="program-row">
          <div class="program-number">{{ String(index + 1).padStart(2, '0') }}</div>

          <div class="program-content">
            <div class="program-header">
              <i :class="['mdi', program.icon]"></i>
              <h3 class="program-title">{{ program.title }}</h3>
            </div>
            <p class="program-description">{{ program.description }}</p>
          </div>

          <div class="program-tag">{{ program.tag }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrainingPrograms",
  setup() {
    const programs = [
      {
        title: "Developmental Gymnastics",
        description:
          "Focused on overall physical development. Children improve coordination, flexibility, strength, balance, posture, and confidence.",
        icon: "mdi-human-handsup",
        tag: "All levels"
      },
      {
        title: "Professional Acrobatics Training",
        description:
          "Designed for children who want to train more seriously and prepare for performances and competitions. These sessions focus on advanced elements, technique, and structured progression.",
        icon: "mdi-medal-outline",
        tag: "All levels"
      },
      {
        title: "Individual Training",
        description:
          "One-on-one sessions with the coach. Ideal for faster progress, refining technique, preparing for competitions, or focusing on specific skills.",
        icon: "mdi-account-star-outline",
        tag: "All levels"
      }
    ];

    return { programs };
  }
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.training-programs {
  padding: 4rem 0;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba($accent-tertiary, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba($accent-tertiary, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
    pointer-events: none;
  }

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

  .programs-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .program-row {
    display: grid;
    grid-template-columns: 80px 1fr auto;
    align-items: center;
    gap: 2rem;
    padding: 2.5rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    transition: all 0.35s ease;
    border-radius: 16px;

    &:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    }

    &:hover {
      background: rgba($surface-dark, 0.5);
      border-color: transparent;
      padding-left: 2.5rem;

      .program-number {
        color: $accent-primary;
      }

      +.program-row {
        border-top-color: transparent;
      }

      .program-tag {
        border-color: rgba($accent-primary, 0.4);
        color: $accent-primary;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 48px 1fr;
      grid-template-rows: auto auto;

      .program-tag {
        grid-column: 2;
        justify-self: start;
      }
    }

    @media (max-width: 480px) {
      padding: 2rem 1rem;
      gap: 1rem;
    }
  }

  .program-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.1);
    line-height: 1;
    transition: color 0.35s ease;
    font-variant-numeric: tabular-nums;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .program-content {
    .program-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;

      i {
        font-size: 1.5rem;
        color: $accent-tertiary;
      }
    }

    .program-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: $text-primary;

      @media (max-width: 768px) {
        font-size: 1.25rem;
      }
    }

    .program-description {
      font-size: 1rem;
      color: $text-secondary;
      line-height: 1.6;
      max-width: 600px;
    }
  }

  .program-tag {
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: $text-secondary;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    padding: 0.4rem 1rem;
    transition: all 0.35s ease;

    @media (max-width: 768px) {
      margin-top: 0.5rem;
    }
  }
}
</style>