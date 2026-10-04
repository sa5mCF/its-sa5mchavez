<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useReveal'

const { t, tm, rt } = useI18n()
const root = ref(null)
useReveal(root)

const influences = computed(() => {
  const items = tm('influences.items')
  return Array.isArray(items) ? items.map(item => ({
    name: rt(item.name),
    description: rt(item.description)
  })) : []
})
</script>

<template>
  <section id="influences" ref="root" class="influences section">
    <div class="container">
      <p class="section-label"><span class="section-label__num">IV.</span>{{ t('influences.label') }}</p>
      <h2 class="section-title">{{ t('influences.title') }}</h2>
      <p class="section-subtitle">{{ t('influences.subtitle') }}</p>

      <ol class="influences__list">
        <li v-for="(influence, index) in influences" :key="index" class="influences__item reveal">
          <span class="influences__num">{{ index + 1 }}</span>
          <h3 class="influences__name">{{ influence.name }}</h3>
          <p class="influences__description">{{ influence.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.influences__list {
  margin-top: var(--space-2xl);
  border-top: 1px solid var(--color-rule);
}

.influences__item {
  display: grid;
  grid-template-columns: 2rem 1fr 1.6fr;
  align-items: baseline;
  gap: var(--space-lg);
  padding: var(--space-lg) 0;
  border-bottom: 1px solid var(--color-rule);
}

.influences__num {
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--color-accent);
}

.influences__name {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: var(--text-xl);
}

.influences__description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .influences__item {
    grid-template-columns: 1.5rem 1fr;
  }

  .influences__description {
    grid-column: 2;
  }
}
</style>
