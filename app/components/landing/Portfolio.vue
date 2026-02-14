<template>
  <section class="portfolio" id="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="title text-center">Shaping Products Together</h2>
        <p class="subtitle text-center">A showcase of innovation, performance, and excellence.</p>
      </div>

      <div class="portfolio-list">
          <v-row>
              <v-col v-for="(project, index) in combinedProjects" :key="index" cols="12" v-show="showAll || index < 4">
                <div  class="project-item">
                  <!-- ... existing project item content ... -->
                  <div class="project-image">
                    <img :src="project.image" :alt="project.title" />
                    <div class="card-overlay">
                      <div class="links">
                        <a v-if="project.web" :href="project.web" target="_blank" class="link-icon" title="Web">
                          <i class="mdi mdi-web"></i>
                        </a>
                        <a v-if="project.ios" :href="project.ios" target="_blank" class="link-icon" title="iOS">
                          <i class="mdi mdi-apple"></i>
                        </a>
                        <a v-if="project.android" :href="project.android" target="_blank" class="link-icon" title="Android">
                          <i class="mdi mdi-google-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="project-info">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-text">{{ project.text }}</p>
                    <div class="project-actions">
                      <a v-if="project.web" :href="project.web" target="_blank" class="action-btn">
                        <i class="mdi mdi-web"></i> Web
                      </a>
                      <a v-if="project.ios" :href="project.ios" target="_blank" class="action-btn">
                        <i class="mdi mdi-apple"></i> iOS
                      </a>
                      <a v-if="project.android" :href="project.android" target="_blank" class="action-btn">
                        <i class="mdi mdi-google-play"></i> Android
                      </a>
                    </div>
                  </div>
                </div>
              </v-col>
          </v-row>
      </div>

      <div v-show="!showAll && combinedProjects.length > 4" class="show-more-container text-center">
        <button @click="showAll = true" class="btn-primary show-more-btn">
          Show All Projects <i class="mdi mdi-chevron-down"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Projects, Collaborations } from '~/assets/ts/constants'

interface Project {
  title: string;
  text: string;
  image: string;
  web?: string;
  ios?: string;
  android?: string;
  cols?: number | string;
}

export default defineComponent({
  name: "Portfolio",
  setup() {
    const showAll = ref(false)
    const combinedProjects = [...Projects as Project[], ...Collaborations as Project[]]
    
    return {
      combinedProjects,
      showAll
    }
  }
})
</script>

<style scoped lang="scss">
@use "~/assets/css/colors" as *;

.portfolio {
  padding: 8rem 0;
  background: transparent;

  .show-more-container {
    margin-top: 4rem;

    .show-more-btn {
      padding: 1rem 3rem;
      border-radius: 100px;
      font-size: 1.125rem;
      box-shadow: 0 10px 30px rgba($accent-blue, 0.2);
      
      i {
        margin-left: 0.5rem;
        font-size: 1.5rem;
        vertical-align: middle;
      }
    }
  }


  .section-header {
    margin-bottom: 6rem;
    
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
    
    .text-center { text-align: center; }
  }

  .portfolio-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .project-item {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 2rem;
    align-items: center;
    background: rgba($surface-dark, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 32px;
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    overflow: hidden;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }

    &:hover {
      transform: scale(1.02);
      border-color: rgba($accent-blue, 0.2);
      background: rgba($surface-dark, 0.5);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

      .project-image img {
        transform: scale(1.05);
      }

      .card-overlay {
        opacity: 1;
      }
    }

    .project-image {
      position: relative;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      border-radius: 35px;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($bg-dark, 0.4);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;

        .links {
          display: flex;
          gap: 1.5rem;

          .link-icon {
            width: 50px;
            height: 50px;
            background: white;
            color: $bg-dark;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            transition: all 0.3s ease;

            &:hover {
              background: $accent-blue;
              color: white;
              transform: scale(1.1);
            }
          }
        }
      }
    }

    .project-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .project-title {
        font-size: 2rem;
        margin-bottom: 0.2rem;
        color: $text-primary;
        font-weight: 800;
        letter-spacing: -0.01em;
      }

      .project-text {
        font-size: 1.125rem;
        color: $text-secondary;
        line-height: 1.7;
        margin: 0;
        margin-bottom: 0.8rem;
      }

      .project-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        @media (max-width: 768px) {
          justify-content: center;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;

          i {
            font-size: 1.25rem;
          }

          &:hover {
            background: $accent-blue;
            border-color: $accent-blue;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba($accent-blue, 0.3);
          }
        }
      }
    }
  }
}


</style>