<template>
  <section class="competitions" id="competitions">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Competitions</span>
        <h2 class="title">Compete In A Healthy Environment</h2>
        <div class="accent-line"></div>
      </div>

      <div class="competitions-body">
        <div class="photo-grid">
          <div class="photo-slot main">
            <img src="/img/comp-main.jpeg" class="img"></img>
          </div>
          <div class="photo-slot">
            <img src="/img/comp-sub1.png" class="img"></img>
          </div>
          <div class="photo-slot">
            <img src="/img/comp-sub2.png" class="img"></img>
          </div>
        </div>

        <div class="content-side">
          <p class="description">
            We host internal club competitions 2–3 times per year to motivate children,
            build confidence, and track their progress in a supportive environment.
          </p>

          <div class="stats">
            <div v-for="(stat, index) in stats" :key="index" class="stat-item">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>

          <div class="highlights">
            <div v-for="(highlight, index) in highlights" :key="index" class="highlight-row">
              <i :class="['mdi', highlight.icon]"></i>
              <span>{{ highlight.text }}</span>
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
  name: "Competitions",
  setup() {
    const stats = [
      { value: "2–3×", label: "Per year" },
      { value: "100%", label: "Internal & supportive" },
    ];

    const highlights = [
      { icon: "mdi-trophy-outline", text: "Motivates children to set and reach new goals" },
      { icon: "mdi-shield-star-outline", text: "Builds confidence in a safe, familiar environment" },
      { icon: "mdi-chart-line", text: "A clear way to track each child's personal progress" },
    ];

    return { stats, highlights };
  }
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.competitions {
  padding: 4rem 0;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .container {
    position: relative;
    z-index: 1;
  }

  .section-header {
    margin-bottom: 4rem;

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
      background: linear-gradient(90deg, $accent-primary, $accent-tertiary);
      border-radius: 2px;
    }
  }

  .competitions-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  // --- Photo Grid ---
  .photo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 280px 180px;
    gap: 1rem;

    @media (max-width: 480px) {
      grid-template-rows: 200px 140px;
    }

    .photo-slot {
      border-radius: 16px;
      overflow: hidden;

      &.main {
        grid-column: 1 / -1;
      }

      .photo-placeholder {
        width: 100%;
        height: 100%;
        background: rgba($surface-dark, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.07);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.3s ease;

        i {
          font-size: 2.5rem;
          color: rgba(255, 255, 255, 0.15);
        }

        &:hover {
          border-color: rgba($accent-primary, 0.25);
        }
      }

      // When real images are used, swap placeholder for an <img>
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }

  // --- Content Side ---
  .content-side {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .description {
    font-size: 1.125rem;
    color: $text-secondary;
    line-height: 1.8;
  }

  .stats {
    display: flex;
    gap: 2.5rem;
    justify-content: space-around;

    .stat-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      .stat-value {
        font-size: 2rem;
        font-weight: 800;
        background: linear-gradient(45deg, $accent-primary, $accent-tertiary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1;
      }

      .stat-label {
        font-size: 0.875rem;
        color: $text-secondary;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 600;
      }
    }
  }

  .highlights {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.25rem;

    .highlight-row {
      display: flex;
      align-items: c;
      gap: 1rem;
      font-size: 1rem;
      color: $text-secondary;
      line-height: 1.6;

      i {
        font-size: 1.25rem;
        color: $accent-tertiary;
        margin-top: 0.1rem;
        flex-shrink: 0;
      }
    }
  }
}
</style>