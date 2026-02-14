<template>
  <section class="hero" id="home">
    <div class="hero-bg">
      <img src="/img/hero-bg.png" alt="Futuristic Tech Background" />
      <div class="overlay"></div>
    </div>
    
    <div class="hero-content container">
      <div class="logo-wrapper">
        <img src="/img/cubic-logo.png" alt="TCKR Tech Logo" class="main-logo" />
      </div>
      
      <div class="text-wrapper">
          <h1 class="slogan">
              The Engineering <span class="accent-text">Partner</span> of <span class="gradient-text">Amazing Products</span>

          </h1>
<!--          <h1 class="slogan">-->
<!--              Engineering the <span class="accent-text">Future</span> of <span class="gradient-text">Digital Intelligence</span>-->
<!--          </h1>-->

        <p class="subtitle">
            World-class Software Engineering solutions. Based in the <strong>United Arab Emirates</strong>, building for the world.
        </p>
        <div class="cta-group">
          <a href="#about" class="btn btn-primary">Explore Our Mission</a>
          <a href="#projects" class="btn btn-outline">Our Contributions</a>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Front"
})
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;
@use "sass:color";

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: $text-primary;

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.6) contrast(1.1);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba($bg-dark, 0.4) 0%,
        rgba($bg-dark, 0.8) 100%
      );
    }
  }

  .hero-content {
    text-align: center;
    max-width: 900px;
    padding: 0 2rem;
    z-index: 1;
    animation: fadeIn 1.2s ease-out;

    .logo-wrapper {
      margin-bottom: 1rem;
      
      .main-logo {
        height: 190px;
        width: auto;
        filter: drop-shadow(0 0 30px rgba($accent-blue, 0.4));
        transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

          @media (max-width: 600px) {
              height: 130px;
          }
        
        &.tech-logo {
          mix-blend-mode: screen;
          border-radius: 50%;
          filter: contrast(120%) brightness(110%);
        }
        
        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .slogan {
      font-size: 4.5rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      font-weight: 800;

      @media (max-width: 768px) {
        font-size: 3rem;
      }

      @media (max-width: 600px) {
        font-size: 2.25rem;
      }

      .accent-text {
        color: $accent-blue;
      }

      .gradient-text {
        background: linear-gradient(45deg, $accent-blue, $accent-purple, $accent-teal);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .subtitle {
      font-size: 1.25rem;
      color: $text-secondary;
      margin-bottom: 3rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-group {
      display: flex;
      gap: 1.5rem;
      justify-content: center;

      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
}

.btn {
  padding: 1rem 2rem;
  border-radius: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: inline-block;

  &.btn-primary {
    background: $accent-blue;
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba($accent-blue, 0.4);

    &:hover {
        background: color.scale($accent-blue, $lightness: -20%);
      box-shadow: 0 6px 20px rgba($accent-blue, 0.6);
      transform: translateY(-2px);
    }
  }

  &.btn-outline {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: white;

    &:hover {
      border-color: white;
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;

  .mouse {
    width: 26px;
    height: 42px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    position: relative;

    .wheel {
      width: 4px;
      height: 8px;
      background: white;
      border-radius: 2px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      animation: wheelScroll 2s infinite;
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
  40% {transform: translateY(-10px) translateX(-50%);}
  60% {transform: translateY(-5px) translateX(-50%);}
}

@keyframes wheelScroll {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 15px); opacity: 0; }
}

</style>