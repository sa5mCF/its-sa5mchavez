<script setup>
/**
 * Skills Section
 * Displays technical skills organized by category
 */
const skillCategories = [
  {
    title: 'Frontend',
    icon: '◆',
    skills: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind'],
  },
  {
    title: 'Backend',
    icon: '◈',
    skills: ['Node.js', 'Python', 'Express', 'NestJS', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Bases de Datos',
    icon: '◇',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma', 'SQL'],
  },
  {
    title: 'DevOps & Tools',
    icon: '▣',
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux', 'Vercel'],
  },
]
</script>

<template>
  <section id="skills" class="skills section">
    <div class="container">
      <span class="section-label">// habilidades</span>
      <h2 class="section-title">
        Mi <span class="gradient-text">Stack</span> Tecnológico
      </h2>
      <p class="section-subtitle">
        Herramientas y tecnologías con las que trabajo día a día para crear soluciones robustas.
      </p>

      <div class="skills__grid">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="skills__category glass-card"
        >
          <div class="skills__category-header">
            <span class="skills__icon">{{ category.icon }}</span>
            <h3 class="skills__category-title">{{ category.title }}</h3>
          </div>
          <div class="skills__tags">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="tag"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-3xl);
}

.skills__category {
  padding: var(--space-xl);
}

.skills__category-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.skills__icon {
  font-size: var(--text-xl);
  color: var(--color-accent-primary);
}

.skills__category-title {
  font-size: var(--text-lg);
  font-weight: 700;
}

.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

@media (max-width: 768px) {
  .skills__grid {
    grid-template-columns: 1fr;
  }
}
</style>
