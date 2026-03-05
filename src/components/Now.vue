<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, tm, rt } = useI18n()

const nowItems = computed(() => {
  const items = tm('now.items')
  return Array.isArray(items) ? items.map(item => ({
    label: rt(item.label),
    value: rt(item.value)
  })) : []
})
</script>

<template>
  <section id="now" class="now section">
    <div class="container">
      <div class="now__content">
        <div class="now__divider"></div>
        <span class="section-label">{{ t('now.label') }}</span>
        <h2 class="section-title">{{ t('now.title') }}</h2>
        <p class="section-subtitle section-subtitle--compact">{{ t('now.subtitle') }}</p>

        <ul class="now__list">
          <li v-for="(item, index) in nowItems" :key="index" class="now__item">
            <span class="now__bullet">•</span>
            <span class="now__label">{{ item.label }}:</span>
            <span class="now__value">{{ item.value }}</span>
          </li>
        </ul>

        <p class="now__updated">{{ t('now.updated') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.now {
  padding: var(--space-3xl) 0;
}

.now__content {
  max-width: 600px;
}

.now__divider {
  width: 40px;
  height: 2px;
  background: var(--color-accent-primary-soft);
  margin-bottom: var(--space-2xl);
}

.section-subtitle--compact {
  font-size: var(--text-sm);
  margin-bottom: var(--space-xl);
  max-width: 100%;
}

.now__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.now__item {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  font-size: var(--text-base);
  color: var(--color-text-primary);
}

.now__bullet {
  color: var(--color-accent-primary);
  font-weight: 700;
}

.now__label {
  font-weight: 600;
  color: var(--color-text-primary);
}

.now__value {
  color: var(--color-text-secondary);
}

.now__updated {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}
</style>
