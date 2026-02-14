<template>
  <section class="services" id="services">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Our Services</span>
        <h2 class="title">What We Offer</h2>
        <p class="subtitle">Tailored engineering solutions designed for scale and longevity.</p>
      </div>

      <div class="services-grid">
        <!-- Service 1 -->
        <div class="service-card">
          <div class="icon-box">
            <i class="mdi mdi-code-braces"></i>
          </div>
          <h3 class="service-title">iOS/Android Development</h3>
          <p class="service-description">
            We turn your vision into a robust, production-ready reality. From initial architecture design to final deployment, 
            we build high-performance applications tailored to your specific needs.
          </p>
          <ul class="features-list">
            <li><i class="mdi mdi-check"></i> Custom Architecture</li>
            <li><i class="mdi mdi-check"></i> Modern Tech Stack</li>
            <li><i class="mdi mdi-check"></i> Rapid Prototyping</li>
          </ul>
        </div>

          <!-- Service 3 -->
          <div class="service-card">
              <div class="icon-box">
                  <i class="mdi mdi-cloud-sync"></i>
              </div>
              <h3 class="service-title">Backend & DevOps</h3>
              <p class="service-description">
                  Streamline your delivery pipeline. We specialize in Kubernetes, cloud migrations, and automated deployments
                  to ensure maximum uptime and seamless scalability.
              </p>
              <ul class="features-list">
                  <li><i class="mdi mdi-check"></i> Kubernetes Orchestration</li>
                  <li><i class="mdi mdi-check"></i> Deployments and Supervision</li>
                  <li><i class="mdi mdi-check"></i> Google Cloud Infrastructure</li>
              </ul>
          </div>

          <!-- Service 2 -->
          <div class="service-card">
              <div class="icon-box">
                  <i class="mdi mdi-tools"></i>
              </div>
              <h3 class="service-title">Maintenance & Support</h3>
              <p class="service-description">
                  Software is a living entity. We provide long-term maintenance, security updates, and performance optimizations
                  to ensure your systems remain reliable and efficient as you grow.
              </p>
              <ul class="features-list">
                  <li><i class="mdi mdi-check"></i> 24/7 Monitoring</li>
                  <li><i class="mdi mdi-check"></i> Security Audits</li>
                  <li><i class="mdi mdi-check"></i> Feature Extensions</li>
              </ul>
          </div>


          <div class="service-card">
              <div class="icon-box">
                  <i class="mdi mdi-brain"></i>
              </div>
              <h3 class="service-title">AI Integrations</h3>
              <p class="service-description">
                  AI should work for your business, not the other way around. We design and integrate intelligent systems
                  that automate workflows, enhance decision-making, and unlock new capabilities across your products.
              </p>
              <ul class="features-list">
                  <li><i class="mdi mdi-check"></i> LLM & API Integrations</li>
                  <li><i class="mdi mdi-check"></i> Custom AI Workflows</li>
                  <li><i class="mdi mdi-check"></i> Automation & Intelligence Layers</li>
              </ul>
          </div>




        <div class="service-card">
            <div class="icon-box">
                <i class="mdi mdi-google-ads"></i>
            </div>
            <h3 class="service-title">Ads & Performance Marketing</h3>
            <p class="service-description">
                Growth doesn’t happen by accident. We plan, launch, and optimize high-performance Google Ads campaigns
                focused on measurable results, qualified traffic, and sustainable ROI.
            </p>
            <ul class="features-list">
                <li><i class="mdi mdi-check"></i> Google Ads Setup & Management</li>
                <li><i class="mdi mdi-check"></i> Conversion Tracking & Analytics</li>
                <li><i class="mdi mdi-check"></i> Continuous Optimization & Scaling</li>
            </ul>
        </div>

        <!-- Service: SEO for Search & AI -->
        <div class="service-card">
            <div class="icon-box">
                <i class="mdi mdi-magnify-scan"></i>
            </div>
            <h3 class="service-title">SEO for Search & AI</h3>
            <p class="service-description">
                Visibility now goes beyond traditional search. We optimize your digital presence for both Google and
                AI-driven discovery, ensuring your products are discoverable, trusted, and referenced across modern LLM platforms.
            </p>
            <ul class="features-list">
                <li><i class="mdi mdi-check"></i> Technical & On-Page SEO</li>
                <li><i class="mdi mdi-check"></i> LLM & AI Search Optimization</li>
                <li><i class="mdi mdi-check"></i> Structured Data & Content Strategy</li>
            </ul>
        </div>


      </div>



      <div class="partnership-footer">
        <p>Emphasizing <strong>scalability</strong>, <strong>reliability</strong>, and long-term <strong>partnership</strong>.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "WhatWeOffer"
})
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.services {
  padding: 8rem 0;
  background: transparent;
  

  .section-header {
    margin-bottom: 5rem;
    text-align: center;

    .eyebrow {
      color: $accent-purple;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-weight: 600;
      font-size: 0.875rem;
      display: block;
      margin-bottom: 1rem;
    }

    .title {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      font-weight: 800;

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    .subtitle {
      font-size: 1.25rem;
      color: $text-secondary;
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .service-card {
    background: rgba($surface-dark, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 32px;
    padding: 3rem;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;

      @media (max-width: 600px) {
          padding: 1.5rem;
      }

    &.highlight {
      border-color: rgba($accent-blue, 0.3);
      background: linear-gradient(135deg, rgba($surface-dark, 0.5) 0%, rgba($accent-blue, 0.05) 100%);
      transform: translateY(-5px);
    }

    &:hover {
      transform: translateY(-10px);
      background: rgba($surface-dark, 0.6);
      border-color: rgba($accent-blue, 0.2);
    }

    .icon-box {
      width: 64px;
      height: 64px;
      background: rgba($accent-blue, 0.1);
      color: $accent-blue;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .service-title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    .service-description {
      color: $text-secondary;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: auto;

      li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
        color: $text-primary;
        font-weight: 500;
        font-size: 0.9375rem;

        i {
          color: $accent-teal;
          font-size: 1.25rem;
        }
      }
    }
  }

  .partnership-footer {
    margin-top: 5rem;
    text-align: center;
    color: $text-secondary;
    font-size: 1.125rem;

    strong {
      color: $text-primary;
    }
  }
}
</style>