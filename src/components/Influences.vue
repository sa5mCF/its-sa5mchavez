<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, tm, rt } = useI18n()

const influences = computed(() => {
  const items = tm('influences.items')
  return Array.isArray(items) ? items.map(item => ({
    name: rt(item.name),
    description: rt(item.description)
  })) : []
})
</script>

<template>
  <section id="influences" class="influences section">
    <div class="container">
      <span class="section-label">{{ t('influences.label') }}</span>
      <h2 class="section-title">{{ t('influences.title') }}</h2>

      <div class="influences__grid">
        <div v-for="(influence, index) in influences" :key="index" class="influence-card glass-card">
          <h3 class="influence-card__name">{{ influence.name }}</h3>
          <p class="influence-card__description">{{ influence.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.influences {
  padding-bottom: var(--space-5xl);
}

.influences__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-2xl);
}

.influence-card {
  padding: var(--space-xl);
}

.influence-card__name {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--color-text-primary);
}

.influence-card__description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}
</style>
