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
            <div
              class="card-bg"
              :style="{ backgroundImage: `url('/img/${reason.image}')` }"
            ></div>
            <div class="card-overlay"></div>
            <div class="card-inner">
              <h2 class="card-title">{{ reason.title.toUpperCase() }}</h2>
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
      { title: "Professional coaches",         image: "coaches.png" },
      { title: "Small group sizes",            image: "small.png" },
      { title: "Fully equipped facility",      image: "fully.png" },
      { title: "Variety of training options",  image: "variety.png" },
      { title: "Safe and supported environment", image: "safe.png" },
      { title: "Years of experience",          image: "years.png" },
    ];

    return { reasons };
  }
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.parents-trust {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  background: $bg-dark;

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
      position: relative;
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      padding: 2.5rem;
      overflow: hidden;
      transition: all 0.35s ease;
      text-align: center;
      cursor: default;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 180px;

      // — background image layer
      .card-bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        opacity: 0.15;
        transition: opacity 0.35s ease;
        border-radius: 24px;
      }

      // — dark overlay on hover
      .card-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0);
        transition: background 0.35s ease;
        border-radius: 24px;
      }

      .card-inner {
        position: relative;
        z-index: 1;
        transition: transform 0.35s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: $accent-primary;
        transition: font-size 0.35s ease;
      }

      // — hover state
      &:hover {
        .card-bg {
          opacity: 0.25;
        }

        .card-overlay {
          background: rgba(0, 0, 0, 0.45);
        }

        .card-inner {
          transform: translateY(-5px);
        }

        .card-title {
          font-size: 1.75rem;
        }
      }
    }
  }
}
</style>