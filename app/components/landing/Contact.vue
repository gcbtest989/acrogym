<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-card">
        <div class="contact-info">
          <h2 class="title">Get in Touch</h2>
          <p class="subtitle">Ready to innovate? Let's build something exceptional together.</p>

          <div class="info-list">
            <div class="info-item">
              <div class="icon-box">
                <i class="mdi mdi-map-marker"></i>
              </div>
              <div class="details">
                <div class="label">Location</div>
                <div class="value">Business Bay, Dubai</div>
              </div>
            </div>

            <div class="info-item">
              <div class="icon-box">
                <i class="mdi mdi-phone"></i>
              </div>
              <div class="details">
                <div class="label">Phone</div>
                <div class="value">+1 666 666 666</div>
              </div>
            </div>

            <div class="info-item">
              <div class="icon-box">
                <i class="mdi mdi-email"></i>
              </div>
              <div class="details">
                <div class="label">Email</div>
                <div class="value">info@acrogym.com</div>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label>Full Name</label>
              <input v-model="form.name" type="text" placeholder="John Doe" required :disabled="loading" />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input v-model="form.email" type="email" placeholder="john@example.com" required :disabled="loading" />
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" placeholder="How can we help you?" required :disabled="loading"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
              <span v-if="loading">Sending...</span>
              <span v-else>Send Message</span>
            </button>

            <div v-if="status.message" :class="['status-msg', status.type]">
              {{ status.message }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: "Contact",
  setup() {
    const loading = ref(false)
    const form = reactive({
      name: '',
      email: '',
      message: ''
    })
    const status = reactive({
      type: '',
      message: ''
    })

    const handleSubmit = async () => {
      loading.value = true
      status.message = ''
      
      try {
        const response = await fetch('https://something-here/acrogym/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })

        if (response.ok) {
          status.type = 'success'
          status.message = 'Message sent successfully! We will get back to you soon.'
          form.name = ''
          form.email = ''
          form.message = ''
        } else {
            status.type = 'error'
            status.message = 'Something went wrong. Please try again or contact us directly via email.'
        }
      } catch (error) {
        status.type = 'error'
        status.message = 'Something went wrong. Please try again or contact us directly via email.'
      } finally {
        loading.value = false
      }
    }

    return {
      form,
      loading,
      status,
      handleSubmit
    }
  }
})
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;
@use "sass:color";

.contact {
  padding: 8rem 0;
  background: transparent;


  .container {
    max-width: 1100px;
  }

  .contact-card {
    background: $surface-dark;
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: grid;
    grid-template-columns: 1.2fr 1.5fr;
    overflow: hidden;
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  .contact-info {
    padding: 4rem;
    background: linear-gradient(180deg, rgba($accent-blue, 0.1) 0%, transparent 100%);
    
    @media (max-width: 576px) {
      padding: 2.5rem;
    }

    .title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 800;

      @media (max-width: 600px) {
        font-size: 1.75rem;
      }
    }

    .subtitle {
      color: $text-secondary;
      margin-bottom: 3rem;
      font-size: 1.125rem;
    }

    .info-list {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      .info-item {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;

        .icon-box {
          width: 48px;
          height: 48px;
          background: rgba($accent-blue, 0.1);
          color: $accent-blue;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .details {
          .label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: $accent-teal;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }
          .value {
            color: $text-primary;
            font-weight: 500;
            line-height: 1.4;
          }
        }
      }
    }
  }

  .contact-form {
    padding: 4rem;
    background: rgba(255, 255, 255, 0.02);

    @media (max-width: 576px) {
      padding: 2.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: $text-secondary;
      }

      input, textarea {
        width: 100%;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        color: white;
        font-family: inherit;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: $accent-blue;
          background: rgba(255, 255, 255, 0.08);
        }
      }

      textarea {
        height: 150px;
        resize: none;
      }
    }

    .btn-block {
      width: 100%;
    }

    .btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    }

    .status-msg {
      margin-top: 1.5rem;
      padding: 1rem;
      border-radius: 12px;
      font-size: 0.875rem;
      font-weight: 500;
      text-align: center;
      animation: fadeIn 0.3s ease;

      &.success {
        background: rgba($accent-teal, 0.1);
        color: $accent-teal;
        border: 1px solid rgba($accent-teal, 0.2);
      }

      &.error {
        background: rgba(#ef4444, 0.1);
        color: #ef4444;
        border: 1px solid rgba(#ef4444, 0.2);
      }
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.btn-primary {
  padding: 1rem 2rem;
  background: $accent-blue;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
      background: color.scale($accent-blue, $lightness: -20%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba($accent-blue, 0.4);
  }
}
</style>