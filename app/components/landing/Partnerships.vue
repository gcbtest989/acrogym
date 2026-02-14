<template>
  <section class="partnerships" id="partnerships">
    <div class="container">
      <div class="section-header text-center">
        <span class="eyebrow">Strategic Collaboration</span>
        <h2 class="title">Strategic US Partnerships</h2>
        <p class="subtitle">Empowering major US-based innovators with cutting-edge engineering and infrastructure.</p>
      </div>

      <div class="partners-grid">
        <!-- Partner 1: Shining Apps LLC -->
        <div class="partner-card">
          <div class="card-glow"></div>
          <h3 class="partner-name">Shining Apps LLC</h3>
          <p class="partner-role">Frontend Development and Mobile Apps</p>
          <div class="divider"></div>
          <p class="partner-description">
            We operate as the core engineering engine for Shining Apps LLC, developing innovative features for their diverse portfolio of mobile applications. 
            By building seamless user experiences and powerful backends, we enable them to deliver top-tier apps to millions of users on the App Store and Google Play.
          </p>
          <div class="tech-tags">
            <span>Mobile Development</span>
            <span>API Design</span>
            <span>Google Ads</span>
          </div>
            <p class="partner-link" style="margin-top: 2rem;">
                <a class="accent-text font-weight-bold" href="https://www.shiningapps.com">www.shiningapps.com</a>
            </p>
        </div>

        <!-- Partner 2: TCK Systems LLC -->
        <div class="partner-card">
          <div class="card-glow"></div>
          <h3 class="partner-name">TCK Systems LLC</h3>
          <p class="partner-role">Backend, Infrastructure & DevOps Excellence</p>
          <div class="divider"></div>
          <p class="partner-description">
            For TCK Systems LLC, we provide end-to-end infrastructure management and DevOps automation. 
            We maintain their complex Kubernetes clusters and cloud environments, ensuring maximum reliability and performance so they can focus on scaling their business without technical boundaries.
          </p>

          <div class="tech-tags">
            <span>Kubernetes Clusters</span>
            <span>Cloud Infra</span>
            <span>DevOps Automation</span>
          </div>
            <p class="partner-link" style="margin-top: 2rem;">
                <a class="accent-text font-weight-bold" href="https://www.tcksystems.com">www.tcksystems.com</a>
            </p>
        </div>
      </div>

      <div class="summary-text text-center">
        <p>You are not growing your business alone — we have your back and contribute fully to the growth of your team and organization.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Partnerships"
})
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.partnerships {
  padding: 8rem 0;
  background: transparent;
  position: relative;
  z-index: 1;


  .text-center { text-align: center; }

  .section-header {
    margin-bottom: 5rem;
    
    .eyebrow {
      color: $accent-blue;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      font-weight: 700;
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

    .subtitle {
      font-size: 1.25rem;
      color: $text-secondary;
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .partners-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  .partner-card {
    background: rgba($surface-dark, 0.4);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 32px;
    padding: 4rem;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;

    @media (max-width: 600px) {
      padding: 1.5rem;
    }

    &:hover {
      transform: translateY(-10px);
      border-color: rgba($accent-blue, 0.3);
      background: rgba($surface-dark, 0.6);

      .card-glow {
        opacity: 0.15;
      }
    }

    .card-glow {
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, $accent-blue 0%, transparent 70%);
      filter: blur(40px);
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
    }

    .partner-name {
      font-size: 2.25rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      color: $text-primary;
    }

    .partner-role {
      font-size: 1rem;
      color: $accent-teal;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    .divider {
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, $accent-blue, transparent);
      margin-bottom: 2rem;
      border-radius: 2px;
    }

    .partner-description {
      font-size: 1.125rem;
      line-height: 1.7;
      color: $text-secondary;
      margin-bottom: 3rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;

      span {
        padding: 0.5rem 1.25rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 100px;
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 600;
      }
    }
  }

  .summary-text {
    margin-top: 5rem;
    color: $text-secondary;
    font-size: 1.25rem;
    font-style: italic;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}

.accent-text {
    color: $accent-blue;
}
</style>
