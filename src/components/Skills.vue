<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

/**
 * Skills Section
 * Displays technical skills organized by category
 */
const skillCategories = [
  {
    key: 'languages',
    icon: '⟨/⟩',
    skills: ['Python', 'Go (Golang)', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    key: 'backend',
    icon: '◈',
    skills: ['Flask', 'FastAPI', 'Django', 'Echo', 'Node.js', 'RESTful APIs', 'GraphQL (Graphene)', 'Microservices', 'API Design'],
  },
  {
    key: 'frontend',
    icon: '◆',
    skills: ['React', 'Next.js', 'Vue.js'],
  },
  {
    key: 'architecture',
    icon: '⚙',
    skills: ['DDD', 'Clean Architecture', 'Distributed Systems', 'Event-Driven', 'Async Processing', 'Financial Systems Modeling'],
  },
  {
    key: 'cloud',
    icon: '☁',
    skills: ['AWS', 'Lambda', 'SQS', 'SNS', 'AuroraDB', 'Redshift', 'Docker', 'Terraform', 'CI/CD'],
  },
  {
    key: 'database',
    icon: '◇',
    skills: ['PostgreSQL', 'MySQL', 'AuroraDB'],
  },
  {
    key: 'testing',
    icon: '✓',
    skills: ['PyTest', 'Unit Testing', 'TDD', 'Integration Testing', 'Mockery (Go)', 'Interface Mocking'],
  },
  {
    key: 'monitoring',
    icon: '📊',
    skills: ['Grafana'],
  },
  {
    key: 'tools',
    icon: '▣',
    skills: ['Git', 'Linux'],
  },
  {
    key: 'additional',
    icon: '♒',
    skills: ['PHP', 'Magento', 'Laravel'],
  },
]
</script>

<template>
  <section id="skills" class="skills section">
    <div class="container">
      <span class="section-label">{{ t('skills.label') }}</span>
      <h2 class="section-title">
        {{ t('skills.titleP1') }} <span class="gradient-text">{{ t('skills.titleP2') }}</span> {{ t('skills.titleP3') }}
      </h2>
      <p class="section-subtitle">
        {{ t('skills.subtitle') }}
      </p>

      <div class="skills__grid">
        <div
          v-for="category in skillCategories"
          :key="category.key"
          class="skills__category glass-card"
        >
          <div class="skills__category-header">
            <span class="skills__icon">{{ category.icon }}</span>
            <h3 class="skills__category-title">{{ t(`skills.categories.${category.key}`) }}</h3>
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
