<template>
  <section class="coach" id="coach">
    <div class="grid-overlay"></div>

    <div class="container">
      <div class="coach-content">

        <div class="header-block">
          <span class="eyebrow">Meet The Coach</span>
          <h2 class="title">A Champion On The Floor. A Mentor At Heart.</h2>
          <div class="accent-line"></div>
        </div>

        <div class="coach-grid">

          <!-- Image Side (placeholder for now) -->
          <div class="image-side">
            <div class="image-card">
              <img src="/img/coach.jpeg" alt="Coach Kristina" class="coach-photo" />
            </div>
          </div>

          <!-- Text Side -->
          <div class="text-side">
            <p class="main-text">
              Kristina is a <span class="highlight">Master of Sports of Russia</span> in Sports Acrobatics
              and a <span class="highlight">Gold and Silver Medalist of the European Championships</span>.
              With over 10 years of experience, she has a gift no medal can show:
              finding the right approach for every child.
            </p>

            <div class="achievements-grid">
              <div class="achievement-card">
                <i class="mdi mdi-star-circle" style="font-size: 1.6rem"></i>
                5-Time Russian Champion and winner of International Competitions
              </div>

              <div class="achievement-card">
                <i class="mdi mdi-star-circle" style="font-size: 1.6rem"></i>
                Higher Sports Education and professional coaching
              </div>

              <div class="achievement-card">
                <i class="mdi mdi-star-circle" style="font-size: 1.6rem"></i>
                Awarded the Order of Valor (3rd Degree) for outstanding achievements
              </div>
            </div>

            <div class="quote-block">
              <p>
                "At AcroGym, we don't teach through pressure.
                We build a love for movement, not a fear of mistakes."
              </p>
              <span class="quote-author">— Kristina</span>
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
  name: "MeetCoach"
});
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.coach-photo {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: top; // keeps the face in frame — adjust if needed
  border-radius: 16px;
  display: block;
}

.coach {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;

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
      font-size: 3.2rem;
      font-weight: 800;
      max-width: 800px;

      @media (max-width: 768px) {
        font-size: 2.3rem;
      }
    }

    .accent-line {
      width: 80px;
      height: 4px;
      margin-top: 1.5rem;
      background: linear-gradient(90deg, $accent-primary, $accent-tertiary);
      border-radius: 2px;
    }
  }

  .coach-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  .image-side {
    .image-card {
      background: rgba($surface-dark, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      padding: 2rem;
      backdrop-filter: blur(10px);

      .image-placeholder {
        height: 400px;
        border-radius: 16px;
        background: linear-gradient(135deg,
            rgba($accent-primary, 0.2),
            rgba($accent-tertiary, 0.2));
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: $text-secondary;
      }
    }
  }

  .text-side {

    .main-text {
      font-size: 1.35rem;
      line-height: 1.6;
      margin-bottom: 3rem;
      color: rgba(255, 255, 255, 0.9);

      .highlight {
        color: $accent-primary;
        font-weight: 700;
      }
    }

    .achievements-grid {
      display: grid;
      gap: 1.5rem;
      margin-bottom: 3rem;

      .achievement-card {
        padding: 1.5rem;
        background: rgba($surface-dark, 0.6);
        border-radius: 18px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        font-weight: 600;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem; // optional spacing between icon and text

        span {
          display: block;
          font-size: 0.85rem;
          color: $accent-tertiary;
          margin-top: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        &:hover {
          transform: translateY(-4px);
          border-color: rgba($accent-primary, 0.4);
        }
      }
    }

    .quote-block {
      padding: 2rem;
      border-left: 4px solid $accent-primary;
      background: rgba($surface-dark, 0.4);
      border-radius: 16px;

      p {
        font-size: 1.2rem;
        font-style: italic;
        margin-bottom: 1rem;
        line-height: 1.6;
      }

      .quote-author {
        font-weight: 700;
        color: $accent-tertiary;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.85rem;
      }
    }
  }
}
</style>