<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useReveal'

const { t, tm, rt } = useI18n()
const root = ref(null)
useReveal(root)

const experiences = computed(() => {
  const items = tm('experience.items')
  return Array.isArray(items) ? items.map(item => ({
    role: rt(item.role),
    company: rt(item.company),
    period: rt(item.period),
    description: Array.isArray(item.description) ? item.description.map(d => rt(d)) : [rt(item.description)],
    tags: Array.isArray(item.tags) ? item.tags.map(t => rt(t)) : [],
    current: item.current
  })) : []
})
</script>

<template>
  <section id="experience" ref="root" class="experience section">
    <div class="container">
      <p class="section-label"><span class="section-label__num">II.</span>{{ t('experience.label') }}</p>
      <h2 class="section-title">
        {{ t('experience.titleP1') }} <span class="accent">{{ t('experience.titleP2') }}</span>
      </h2>
      <p class="section-subtitle">{{ t('experience.subtitle') }}</p>

      <ol class="experience__list">
        <li v-for="(exp, index) in experiences" :key="index" class="experience__item reveal">
          <div class="experience__meta">
            <span class="experience__index">{{ index + 1 }}.</span>
            <span class="experience__period">{{ exp.period }}</span>
            <span v-if="exp.current" class="experience__current" :aria-label="t('experience.current')">●</span>
          </div>

          <div class="experience__body">
            <h3 class="experience__role">
              {{ exp.role }}
              <span class="experience__company">— {{ exp.company }}</span>
            </h3>

            <ul class="experience__points">
              <li v-for="(point, i) in exp.description" :key="i">{{ point }}</li>
            </ul>

            <div class="experience__tags">
              <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.experience__list {
  margin-top: var(--space-3xl);
  border-top: 1px solid var(--color-rule);
}

.experience__item {
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: var(--space-xl);
  padding: var(--space-2xl) 0;
  border-bottom: 1px solid var(--color-rule);
}

.experience__meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.experience__index {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: var(--text-2xl);
  line-height: 1;
  color: var(--color-accent);
}

.experience__period {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
}

.experience__current {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
}

.experience__role {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: var(--text-xl);
  line-height: 1.25;
  margin-bottom: var(--space-lg);
}

.experience__company {
  font-weight: 300;
  font-style: italic;
  color: var(--color-text-secondary);
}

.experience__points {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  max-width: var(--measure);
  margin-bottom: var(--space-lg);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  line-height: 1.7;
}

.experience__points li {
  position: relative;
  padding-left: 1.25rem;
}

.experience__points li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

.experience__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

@media (max-width: 768px) {
  .experience__item {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .experience__meta {
    flex-direction: row;
    align-items: baseline;
    gap: var(--space-md);
  }
}
</style>
