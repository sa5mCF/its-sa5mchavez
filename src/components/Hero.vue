<script setup>
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

/**
 * Hero Section
 * Full-screen intro with name, role, and CTA
 */
const socials = [
  { name: 'GitHub', url: 'https://github.com/sa5mCF', icon: '⟨/⟩' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sa5mchavez/', icon: 'in' },
  { name: 'Email', url: 'mailto:sa5m.escom@gmail.com', icon: '@' },
]

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <section id="hero" class="hero section">
    <div class="container hero__container">
      <!-- Decorative elements -->
      <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--2" aria-hidden="true"></div>
      <div class="hero__grid-lines" aria-hidden="true"></div>

      <!-- Language Switcher -->
      <div class="hero__lang-switcher">
        <button @click="toggleLanguage" class="hero__lang-btn glass-card">
          <span :class="{ 'hero__lang-label--active': locale === 'en' }">EN</span>
          <span class="hero__lang-separator">/</span>
          <span :class="{ 'hero__lang-label--active': locale === 'es' }">ES</span>
        </button>
      </div>

      <div class="hero__content">
        <span class="hero__greeting section-label">{{ t('hero.greeting') }}</span>
        <h1 class="hero__name">
          Samuel
          <span class="gradient-text">Chávez</span>
        </h1>
        <p class="hero__role">
          {{ t('hero.role') }}
        </p>
        <p class="hero__description section-subtitle">
          {{ t('hero.description') }}
        </p>

        <div class="hero__actions">
          <a href="#projects" class="hero__btn hero__btn--primary">
            {{ t('hero.ctaProjects') }}
            <span class="hero__btn-arrow">→</span>
          </a>
          <a href="#experience" class="hero__btn hero__btn--secondary">
            {{ t('hero.ctaExperience') }}
          </a>
        </div>

        <div class="hero__socials">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            :aria-label="social.name"
            class="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ social.icon }}
          </a>
        </div>
      </div>

      <div class="hero__scroll-indicator">
        <span>{{ t('hero.scroll') }}</span>
        <div class="hero__scroll-line"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero__container {
  position: relative;
  z-index: 2;
}

/* Language Switcher */
.hero__lang-switcher {
  position: absolute;
  top: var(--space-xl);
  right: var(--space-xl);
  z-index: 10;
}

.hero__lang-btn {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-md);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-text-muted);
}

.hero__lang-separator {
  opacity: 0.3;
}

.hero__lang-label--active {
  color: var(--color-accent-primary);
}

/* Decorative orbs */
.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  pointer-events: none;
}

.hero__orb--1 {
  width: 500px;
  height: 500px;
  background: var(--color-accent-primary);
  top: -15%;
  right: -10%;
  animation: float 8s ease-in-out infinite;
}

.hero__orb--2 {
  width: 350px;
  height: 350px;
  background: var(--color-accent-secondary);
  bottom: -10%;
  left: -5%;
  animation: float 10s ease-in-out infinite reverse;
}

.hero__grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

/* Content */
.hero__content {
  max-width: 720px;
}

.hero__greeting {
  animation: fadeInUp 0.6s ease-out;
}

.hero__name {
  font-size: var(--text-7xl);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: var(--space-lg);
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.hero__role {
  font-family: var(--font-mono);
  font-size: var(--text-lg);
  color: var(--color-accent-secondary);
  margin-bottom: var(--space-md);
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.hero__description {
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

/* Buttons */
.hero__actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  font-weight: 600;
  font-size: var(--text-sm);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.hero__btn--primary {
  background: var(--gradient-primary);
  color: #fff;
  box-shadow: 0 4px 20px var(--color-accent-primary-glow);
}

.hero__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 91, 235, 0.45);
}

.hero__btn--primary:hover .hero__btn-arrow {
  transform: translateX(4px);
}

.hero__btn-arrow {
  transition: transform var(--transition-fast);
}

.hero__btn--secondary {
  border: 1px solid var(--color-border-default);
  color: var(--color-text-primary);
}

.hero__btn--secondary:hover {
  border-color: var(--color-accent-primary);
  background: var(--color-accent-primary-soft);
  transform: translateY(-2px);
}

/* Socials */
.hero__socials {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
  animation: fadeInUp 0.6s ease-out 0.5s both;
}

.hero__social-link {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
}

.hero__social-link:hover {
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
  background: var(--color-accent-primary-soft);
  transform: translateY(-2px);
}

/* Scroll indicator */
.hero__scroll-indicator {
  position: absolute;
  bottom: var(--space-2xl);
  right: var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  animation: fadeInUp 0.6s ease-out 0.6s both;
}

.hero__scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--color-accent-primary), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.7); }
  50% { opacity: 1; transform: scaleY(1); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero__actions {
    flex-direction: column;
  }

  .hero__btn {
    justify-content: center;
  }

  .hero__scroll-indicator {
    display: none;
  }
}
</style>
