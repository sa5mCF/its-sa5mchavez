<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const socials = [
  { name: 'GitHub', url: 'https://github.com/sa5mCF' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sa5mchavez/' },
  { name: 'Email', url: 'mailto:sa5m.escom@gmail.com' },
]
</script>

<template>
  <section id="top" class="hero">
    <div class="container">
      <p class="hero__eyebrow">{{ t('hero.greeting') }}</p>
      <h1 class="hero__name">
        Samuel<br />
        <span class="accent">Chávez</span>
      </h1>

      <div class="hero__grid">
        <p class="hero__role">{{ t('hero.role') }}</p>
        <p class="hero__description">{{ t('hero.description') }}</p>
      </div>

      <div class="hero__footer">
        <div class="hero__actions">
          <a href="#experience" class="hero__btn hero__btn--primary">{{ t('hero.ctaExperience') }} →</a>
          <a href="mailto:sa5m.escom@gmail.com" class="hero__btn">{{ t('hero.ctaContact') }}</a>
        </div>

        <ul class="hero__socials">
          <li v-for="social in socials" :key="social.name">
            <a :href="social.url" class="hero__social" target="_blank" rel="noopener noreferrer">
              {{ social.name }} ↗
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: var(--space-4xl) 0 var(--space-3xl);
}

.hero__eyebrow {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: var(--text-xl);
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
}

.hero__name {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: var(--text-display);
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: var(--space-3xl);
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: var(--space-2xl);
  padding-top: var(--space-lg);
  border-top: 2px solid var(--color-rule-strong);
}

.hero__role {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.hero__description {
  font-family: var(--font-serif);
  font-size: var(--text-xl);
  line-height: 1.45;
  max-width: 34ch;
}

.hero__footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
  margin-top: var(--space-3xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-rule);
}

.hero__actions {
  display: flex;
  gap: var(--space-md);
}

.hero__btn {
  font-size: var(--text-sm);
  font-weight: 500;
  padding: 0.7rem 1.3rem;
  border: 1px solid var(--color-rule-strong);
  border-radius: 2px;
  transition: all var(--transition);
}

.hero__btn:hover {
  background: var(--color-text);
  color: var(--color-bg);
}

.hero__btn--primary {
  background: var(--color-text);
  color: var(--color-bg);
}

.hero__btn--primary:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
}

.hero__socials {
  display: flex;
  gap: var(--space-lg);
}

.hero__social {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-rule);
  padding-bottom: 2px;
  transition: all var(--transition);
}

.hero__social:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

@media (max-width: 768px) {
  .hero {
    padding-top: var(--space-3xl);
  }

  .hero__grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .hero__actions {
    flex-direction: column;
    width: 100%;
  }

  .hero__btn {
    text-align: center;
  }
}
</style>
