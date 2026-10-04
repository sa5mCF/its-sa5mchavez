<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useReveal'

const { t } = useI18n()
const root = ref(null)
useReveal(root)

const skillCategories = [
  { key: 'languages', skills: ['Python', 'Go (Golang)', 'TypeScript', 'JavaScript', 'Swift', 'SQL'] },
  { key: 'backend', skills: ['Flask', 'FastAPI', 'Django', 'Echo', 'Gin', 'Node.js', 'RESTful APIs', 'GraphQL (Graphene)', 'Swagger/OpenAPI', 'Microservices', 'API Design', 'SQLC'] },
  { key: 'ai', skills: ['LLMs', 'RAG', 'Embeddings', 'Tool/Function Calling', 'Ollama', 'pgvector', 'AI Evaluation', 'Prompt Security'] },
  { key: 'frontend', skills: ['React', 'Next.js', 'Vue.js', 'SwiftUI'] },
  { key: 'architecture', skills: ['DDD', 'Clean Architecture', 'Distributed Systems', 'Event-Driven', 'Async Processing', 'Multi-tenant', 'Financial Systems Modeling'] },
  { key: 'cloud', skills: ['AWS', 'Lambda', 'SQS', 'SNS', 'Redshift', 'S3/MinIO', 'Docker', 'Docker Compose', 'Kubernetes', 'Terraform', 'CI/CD'] },
  { key: 'database', skills: ['PostgreSQL', 'pgvector', 'MySQL', 'AuroraDB'] },
  { key: 'testing', skills: ['PyTest', 'Unit Testing', 'TDD', 'Integration Testing', 'Mockery (Go)', 'Interface Mocking'] },
  { key: 'monitoring', skills: ['Grafana', 'Prometheus', 'Structured Logging'] },
  { key: 'tools', skills: ['Git', 'Linux', 'ADRs'] },
  { key: 'additional', skills: ['PHP', 'Magento', 'Laravel'] },
]
</script>

<template>
  <section id="skills" ref="root" class="skills section">
    <div class="container">
      <p class="section-label"><span class="section-label__num">I.</span>{{ t('skills.label') }}</p>
      <h2 class="section-title">
        {{ t('skills.titleP1') }} <span class="accent">{{ t('skills.titleP2') }}</span> {{ t('skills.titleP3') }}
      </h2>
      <p class="section-subtitle">{{ t('skills.subtitle') }}</p>

      <dl class="skills__list">
        <div v-for="category in skillCategories" :key="category.key" class="skills__row reveal">
          <dt class="skills__term">{{ t(`skills.categories.${category.key}`) }}</dt>
          <dd class="skills__tags">
            <span v-for="skill in category.skills" :key="skill" class="tag">{{ skill }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.skills__list {
  margin-top: var(--space-3xl);
  border-top: 1px solid var(--color-rule);
}

.skills__row {
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: var(--space-xl);
  padding: var(--space-lg) 0;
  border-bottom: 1px solid var(--color-rule);
}

.skills__term {
  font-family: var(--font-serif);
  font-size: var(--text-lg);
}

.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  align-items: center;
}

@media (max-width: 768px) {
  .skills__row {
    grid-template-columns: 1fr;
    gap: var(--space-sm);
  }
}
</style>
