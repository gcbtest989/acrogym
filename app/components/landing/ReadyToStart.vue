<template>
  <section class="ready-to-start" id="ready">
    <div class="container">
      <h2 class="headline">
        <!-- GIVE YOUR CHILD THE OPPORTUNITY TO GROW THROUGH MOVEMENT, CONFIDENCE, AND JOY -->
        Give your child the opportunity to grow through movement, confidence, and joy
      </h2>
      <div class="cta-group">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe23_qFm0_6JOlsg9SSbCHhRGeOHAyjadBtclmwoUnSG4kWyw/viewform"
          target="_blank" class="btn btn-primary">
          Book your first lesson
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReadyToStart"
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;
@use "sass:color";

.ready-to-start {
  padding: 8rem 0;
  background: $accent-secondary; // dark blue background
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .headline {
    font-size: 2rem;
    font-weight: 400;
    color: $text-primary;
    max-width: 800px;
    margin: 0 auto 3rem auto;
    font-family: "Montserrat", sans-serif;
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  .cta-group {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    .btn {
      padding: 1rem 2rem;
      border-radius: 16px;
      font-weight: 600;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s ease;

      &.btn-primary {
        background: $accent-primary; // orange
        color: white;
        border: none;
        box-shadow: 0 4px 15px rgba($accent-primary, 0.4);

        &:hover {
          background: color.scale($accent-primary, $lightness: -15%);
          box-shadow: 0 6px 20px rgba($accent-primary, 0.6);
          transform: translateY(-2px);
        }
      }

      &.btn-outline {
        background: transparent;
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;

        &:hover {
          border-color: $accent-tertiary; // lighter blue
          background: rgba($accent-tertiary, 0.1);
          transform: translateY(-2px);
        }
      }
    }
  }
}
</style>