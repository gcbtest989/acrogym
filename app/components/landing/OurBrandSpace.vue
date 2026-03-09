<template>
  <section class="our-brand-space" id="space">
    <div class="container">

      <div class="section-header">
        <span class="eyebrow">Our Space</span>
        <h2 class="title">Our Brand-New Space: Lagoona Mall</h2>
        <div class="accent-line"></div>
        <div class="section-header">
          <p>Lagoona Mall</p>
          <p>Entrance X, Floor X, Next to X</p>
        </div>
      </div>

      <div class="features-row">
        <div v-for="(feature, index) in features" :key="index" class="feature-item">
          <div class="icon-wrapper">
            <i :class="['mdi', feature.icon]"></i>
          </div>

          <div class="feature-text">
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="map-wrapper">
      <iframe class="map-embed" :src="mapSrc" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurBrandSpace",

  setup() {
    const features = [
      {
        title: "Lots of Room to Move",
        description: "Spacious areas for safe and free movement.",
        icon: "mdi-vector-square"
      },
      {
        title: "Trampolines",
        description: "Fun and dynamic training equipment for agility.",
        icon: "mdi-gymnastics"
      },
      {
        title: "Modern Equipment",
        description: "Brand-new tools for strength, flexibility, and coordination.",
        icon: "mdi-dumbbell"
      },
      {
        title: "Competition Prep Area",
        description: "Dedicated space to prepare for events.",
        icon: "mdi-trophy"
      },
      {
        title: "Flexibility & Strength Zones",
        description: "Focused areas for skill-specific training.",
        icon: "mdi-human-handsup"
      },
      {
        title: "Safe Training Environment",
        description: "Soft flooring and carefully designed equipment for safe practice.",
        icon: "mdi-shield-check"
      }
    ];

    const mapSrc =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.915546653628!2d51.54074527622613!3d25.333417983898084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c4f87654321%3A0xabcdef1234567890!2s66%20Lusail%20Expy%2C%20Doha!5e0!3m2!1sen!2sqa!4v1700000000000!5m2!1sen!2sqa";

    return { features, mapSrc };
  }
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.our-brand-space {
  padding: 10rem 0 0;
  background: $bg-dark;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .container {
    position: relative;
    z-index: 1;
  }

  .section-header {
    text-align: center;
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

  .features-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 5rem;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    max-width: 260px;

    .icon-wrapper {
      font-size: 2rem;
      color: $accent-primary;
      flex-shrink: 0;
    }

    .feature-text {

      h3 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: .25rem;
      }

      p {
        font-size: 0.95rem;
        color: $text-secondary;
        line-height: 1.6;
      }
    }
  }

  .map-wrapper {
    width: 100%;
  }

  .map-embed {
    width: 100%;
    height: 480px;
    border: none;
    display: block;
  }
}
</style>