<script setup>
/**
 * Projects Section
 * Showcases portfolio projects with links and tech tags
 */
const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto. Qué problema resuelve y qué tecnologías usa.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto. Qué problema resuelve y qué tecnologías usa.',
    tags: ['React', 'Express', 'MongoDB'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto. Qué problema resuelve y qué tecnologías usa.',
    tags: ['Python', 'FastAPI', 'Docker'],
    link: '#',
    github: '#',
    featured: false,
  },
]
</script>

<template>
  <section id="projects" class="projects section">
    <div class="container">
      <span class="section-label">// proyectos</span>
      <h2 class="section-title">
        Trabajo <span class="gradient-text">Destacado</span>
      </h2>
      <p class="section-subtitle">
        Una selección de proyectos en los que he trabajado, desde aplicaciones web hasta herramientas de desarrollo.
      </p>

      <div class="projects__grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="projects__card glass-card"
          :class="{ 'projects__card--featured': project.featured }"
        >
          <div class="projects__card-header">
            <span class="projects__number">{{ String(index + 1).padStart(2, '0') }}</span>
            <div class="projects__links">
              <a :href="project.github" class="projects__link" aria-label="GitHub" target="_blank" rel="noopener">
                ⟨/⟩
              </a>
              <a :href="project.link" class="projects__link" aria-label="Live demo" target="_blank" rel="noopener">
                ↗
              </a>
            </div>
          </div>

          <h3 class="projects__title">{{ project.title }}</h3>
          <p class="projects__description">{{ project.description }}</p>

          <div class="projects__tags">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-3xl);
}

.projects__card {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
}

.projects__card--featured {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, rgba(99, 91, 235, 0.06) 0%, rgba(0, 201, 161, 0.04) 100%);
  border-color: rgba(99, 91, 235, 0.15);
}

.projects__card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
}

.projects__number {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent-primary);
  font-weight: 600;
}

.projects__links {
  display: flex;
  gap: var(--space-sm);
}

.projects__link {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.projects__link:hover {
  color: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
  background: var(--color-accent-primary-soft);
}

.projects__title {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.projects__description {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
  flex: 1;
}

.projects__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

@media (max-width: 768px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }

  .projects__card--featured {
    grid-column: auto;
  }
}
</style>
