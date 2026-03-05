<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, tm, rt } = useI18n()

/**
 * Experience Section
 * Timeline of professional experience
 */
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
  <section id="experience" class="experience section">
    <div class="container">
      <span class="section-label">{{ t('experience.label') }}</span>
      <h2 class="section-title">
        {{ t('experience.titleP1') }} <span class="gradient-text">{{ t('experience.titleP2') }}</span>
      </h2>
      <p class="section-subtitle">
        {{ t('experience.subtitle') }}
      </p>

      <div class="experience__timeline">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="experience__item"
        >
          <div class="experience__marker">
            <div
              class="experience__dot"
              :class="{ 'experience__dot--active': exp.current }"
            ></div>
            <div v-if="index < experiences.length - 1" class="experience__line"></div>
          </div>

          <div class="experience__card glass-card">
            <div class="experience__card-header">
              <div>
                <h3 class="experience__role">{{ exp.role }}</h3>
                <span class="experience__company">{{ exp.company }}</span>
              </div>
              <span class="experience__period">{{ exp.period }}</span>
            </div>
            
            <ul class="experience__description-list">
              <li 
                v-for="(point, pIndex) in exp.description" 
                :key="pIndex"
                class="experience__description-item"
              >
                {{ point }}
              </li>
            </ul>

            <div class="experience__tags">
              <span
                v-for="tag in exp.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience__timeline {
  margin-top: var(--space-3xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.experience__item {
  display: flex;
  gap: var(--space-xl);
}

.experience__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-xl);
  flex-shrink: 0;
  width: 20px;
}

.experience__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-surface-card);
  border: 2px solid var(--color-text-muted);
  flex-shrink: 0;
  transition: all var(--transition-base);
}

.experience__dot--active {
  background: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
  box-shadow: 0 0 12px var(--color-accent-primary-glow);
}

.experience__line {
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
  margin-top: var(--space-sm);
}

.experience__card {
  flex: 1;
  padding: var(--space-xl);
}

.experience__card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-md);
  gap: var(--space-md);
}

.experience__role {
  font-size: var(--text-xl);
  font-weight: 700;
}

.experience__company {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent-secondary);
}

.experience__period {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  white-space: nowrap;
  padding: var(--space-xs) var(--space-sm);
  background: rgba(255, 255, 255, 0.04);
  border-radius: var(--radius-sm);
}

.experience__description-list {
  padding-left: var(--space-md);
  margin-bottom: var(--space-lg);
  list-style: none;
}

.experience__description-item {
  position: relative;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-sm);
  padding-left: var(--space-lg);
  font-size: var(--text-base);
}

.experience__description-item::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent-primary);
  font-weight: 700;
  opacity: 0.7;
}

.experience__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

@media (max-width: 768px) {
  .experience__marker {
    display: none;
  }

  .experience__card-header {
    flex-direction: column;
  }
}
</style>
