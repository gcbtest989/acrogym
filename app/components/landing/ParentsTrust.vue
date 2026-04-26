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
            <div class="card-gradient"></div>
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
      { title: "Professional coaches",           image: "professional.png" },
      { title: "Small group sizes",              image: "small.png" },
      { title: "Fully equipped facility",        image: "fully.png" },
      { title: "Variety of training options",    image: "variety.png" },
      { title: "Safe and supported environment", image: "safe.png" },
      { title: "Years of experience",            image: "years.png" },
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
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      overflow: hidden;
      transition: all 0.35s ease;
      cursor: default;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      min-height: 220px;

      // — background image layer, full visibility
      .card-bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        opacity: 1;
        transition: transform 0.35s ease;
        border-radius: 24px;
      }

      // — gradient only at the bottom
      .card-gradient {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to top,
          rgba($bg-dark, 0.95) 0%,
          rgba($bg-dark, 0.5) 35%,
          rgba($bg-dark, 0) 65%
        );
        border-radius: 24px;
      }

      .card-inner {
        position: relative;
        z-index: 1;
        width: 100%;
        padding: 1.25rem 1.5rem;
        text-align: center;
      }

      .card-title {
        font-size: 1rem;
        font-weight: 700;
        color: $accent-primary;
        transition: font-size 0.35s ease;
        letter-spacing: 0.05em;
      }

      // — hover state
      &:hover {
        border-color: rgba($accent-primary, 0.3);

        .card-bg {
          transform: scale(1.05);
        }

        .card-title {
          font-size: 1.15rem;
        }
      }
    }
  }
}
</style>