<template>
  <section class="about" id="about">
    <div class="grid-overlay"></div>
    <div class="container">
      <div class="about-content">
        <div class="header-block">
          <span class="eyebrow">Innovation & Excellence</span>
          <h2 class="title">Who We Are</h2>
          <div class="accent-line"></div>
        </div>

        <div class="description-grid">
          <div class="text-block">
            <p class="main-text">
              Acrogym is a UAE-based company specializing in comprehensive software solutions, including
              <span class="highlight">frontend</span>, <span class="highlight">backend</span>,
              <span class="highlight">DevOps</span>, <span class="highlight">infrastructure</span>,
              and <span class="highlight">mobile services</span>.
            </p>
            <p class="secondary-text">
              We bring innovation and excellence to your digital projects. You are not growing your business alone —
              we have your back and contribute fully to the growth of your team and organization.
            </p>
          </div>

          <div class="stats-block">
            <div class="stat-item">
              <div class="stat-value">Global</div>
              <div class="stat-label">Presence</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">End-to-End</div>
              <div class="stat-label">Solutions</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">Partner</div>
              <div class="stat-label">Growth centric</div>
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
  name: "About"
})
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.about {
  padding: 10rem 0;
  background: transparent;
  position: relative;
  overflow: hidden;

  .grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

  .description-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .text-block {
      .main-text {
        font-size: 1.75rem;
        line-height: 1.4;
        margin-bottom: 2rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.9);

        @media (max-width: 768px) {
          font-size: 1.25rem;
        }

        .highlight {
          color: $accent-blue;
          font-weight: 700;
        }
      }

      .secondary-text {
        font-size: 1.125rem;
        color: $text-secondary;
        line-height: 1.6;
      }
    }

    .stats-block {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 3rem;
      background: rgba($surface-dark, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      backdrop-filter: blur(10px);

      @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
        padding: 2rem;
      }

      @media (max-width: 576px) {
        grid-template-columns: 1fr;
      }

      .stat-item {
        text-align: left;

        @media (max-width: 992px) {
          text-align: center;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: $text-primary;
          margin-bottom: 0.25rem;
          background: linear-gradient(45deg, $text-primary, $accent-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.875rem;
          color: $accent-teal;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }
      }
    }
  }
}
</style>