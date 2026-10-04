<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useReveal'

const { t, tm, rt } = useI18n()
const root = ref(null)
useReveal(root)

const nowItems = computed(() => {
  const items = tm('now.items')
  return Array.isArray(items) ? items.map(item => ({
    label: rt(item.label),
    value: rt(item.value)
  })) : []
})
</script>

<template>
  <section id="now" ref="root" class="now section">
    <div class="container">
      <p class="section-label"><span class="section-label__num">III.</span>{{ t('now.label') }}</p>
      <h2 class="section-title">{{ t('now.title') }}</h2>
      <p class="section-subtitle">{{ t('now.subtitle') }}</p>

      <dl class="now__list">
        <div v-for="(item, index) in nowItems" :key="index" class="now__item reveal">
          <dt class="now__label">{{ item.label }}</dt>
          <dd class="now__value">{{ item.value }}</dd>
        </div>
      </dl>

      <p class="now__updated">{{ t('now.updated') }}</p>
    </div>
  </section>
</template>

<style scoped>
.now__list {
  margin-top: var(--space-2xl);
  border-top: 1px solid var(--color-rule);
  max-width: 720px;
}

.now__item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-xl);
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-rule);
}

.now__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  align-self: center;
}

.now__value {
  font-family: var(--font-serif);
  font-size: var(--text-lg);
}

@media (max-width: 768px) {
  .now__item {
    grid-template-columns: 1fr;
    gap: var(--space-xs);
  }
}

.now__updated {
  margin-top: var(--space-lg);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}
</style>
