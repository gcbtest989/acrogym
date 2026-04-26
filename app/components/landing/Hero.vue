<template>
  <section class="hero" id="home">

    <div class="hero-bg">
      <video autoplay muted loop playsinline poster="/img/header.png">
        <source :src="'/video/header_video.mp4'" type="video/mp4" />
      </video>
      <div class="overlay"></div>
    </div>

    <div class="hero-content container">
      <div class="text-wrapper">
        <h1 class="slogan">
          <span class="acro">Acro</span><span class="gym">GYM</span>
        </h1>

        <div class="logo-wrapper">
          <h2 class="brand-name">Developmental Gymnastics & Professional Acrobatics</h2>
        </div>
        <div class="cta-group">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe23_qFm0_6JOlsg9SSbCHhRGeOHAyjadBtclmwoUnSG4kWyw/viewform"
            target="_blank" class="btn btn-primary">
            Try Now
          </a>
          <a href="#programs" class="btn btn-secondary">
            Explore Our Programs
          </a>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeroSection"
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;
@use "sass:color";

.acro {
  color: $bg-dark;
}

.gym {
  color: $accent-primary;
}

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: $text-primary;
  z-index: 1;

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 0%;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom,
          rgba($bg-dark, 0) 0%,
          rgba($bg-dark, 0.4) 40%,
          rgba($bg-dark, 0.9) 100%);
    }
  }

  .hero-content {
    text-align: center;
    max-width: 900px;
    padding: 0 2rem 5rem;
    z-index: 1;
    animation: fadeIn 1.2s ease-out;

    .logo-wrapper {
      margin-bottom: 1.5rem;

      .brand-name {
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: $text-primary;
      }
    }

    .slogan {
      font-size: 3.8rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      font-weight: 400;

      @media (max-width: 768px) {
        font-size: 2.8rem;
      }

      @media (max-width: 600px) {
        font-size: 2.8rem;
      }

      .gradient-text {
        background: linear-gradient(45deg,
            $accent-primary,
            $accent-tertiary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .subtitle {
      font-size: 1.25rem;
      color: $text-secondary;
      margin-bottom: 3rem;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: 600px) {
        font-size: 1.05rem;
      }
    }

    .cta-group {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 16px;
  font-weight: 700;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: inline-block;

  &.btn-primary {
    background: $accent-primary;
    color: white;
    border: none;
    box-shadow: 0 4px 20px rgba($accent-primary, 0.4);

    &:hover {
      background: color.scale($accent-primary, $lightness: -10%);
      box-shadow: 0 6px 30px rgba($accent-primary, 0.6);
      transform: translateY(-3px);
    }
  }

  &.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.8);
    box-shadow: none;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: white;
      transform: translateY(-3px);
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
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    position: relative;

    .wheel {
      width: 4px;
      height: 8px;
      background: $accent-primary;
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
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) translateX(-50%);
  }

  40% {
    transform: translateY(-10px) translateX(-50%);
  }

  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}

@keyframes wheelScroll {
  0% {
    transform: translate(-50%, 0);
    opacity: 1;
  }

  100% {
    transform: translate(-50%, 15px);
    opacity: 0;
  }
}
</style>