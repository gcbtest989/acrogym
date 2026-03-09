<template>
  <section class="parents-trust" id="trust">
    <div class="grid-overlay"></div>

    <div class="container">
      <div class="trust-content">
        <div class="header-block">
          <span class="eyebrow">Why Parents Trust Us</span>
          <h2 class="title">Building Confidence, Strength & Joy</h2>
          <div class="accent-line"></div>
        </div>

        <div class="trust-cards">
          <div v-for="(reason, index) in reasons" :key="index" class="trust-card">
            <div class="card-inner">
              <h2 class="card-title">{{ reason.title.toUpperCase() }}</h2>
              <p class="card-description">{{ reason.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ParentsTrust",
  setup() {
    const reasons = [
      {
        title: "Individualized Approach",
        description: "Finding the right approach for every child, respecting their pace and personality."
      },
      {
        title: "Fun & Engaging Training",
        description: "Turning each session into an exciting game, where learning feels like play."
      },
      {
        title: "Self-Belief & Confidence",
        description: "Helping children believe in themselves and take pride in their progress."
      }
    ];

    return { reasons };
  }
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.parents-trust {
  padding: 10rem 0;
  position: relative;
  overflow: hidden;

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

  .header-block {
    margin-bottom: 5rem;

    .eyebrow {
      color: $accent-primary;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-weight: 600;
      font-size: 0.875rem;
      display: block;
      margin-bottom: 1rem;
    }

    .title {
      font-size: 3rem;
      font-weight: 800;
      max-width: 800px;
      margin-bottom: 1.5rem;

      @media (max-width: 768px) {
        font-size: 2.3rem;
      }
    }

    .accent-line {
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, $accent-primary, $accent-tertiary);
      border-radius: 2px;
    }
  }

  .trust-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    .trust-card {
      background: rgba($surface-dark, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      padding: 2.5rem;
      backdrop-filter: blur(10px);
      transition: all 0.35s ease;
      cursor: default;

      .card-inner {
        transition: transform 0.35s ease;
      }

      &:hover .card-inner {
        transform: translateY(-5px);
      }

      .card-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        background: linear-gradient(45deg, $accent-primary, $accent-tertiary);
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
}
</style>