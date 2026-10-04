<script setup>
/**
 * Home Page
 * Assembles all sections into the main landing page
 */
import SiteNav from '@/components/SiteNav.vue'
import Hero from '@/components/Hero.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Now from '@/components/Now.vue'
import Influences from '@/components/Influences.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <a href="#main" class="skip-link">{{ t('nav.skip') }}</a>
  <SiteNav />
  <main id="main" class="home">
    <Hero />
    <Skills />
    <Experience />
    <Now />
    <Influences />
  </main>

  <footer class="home__footer">
    <div class="container home__footer-content">
      <p>
        {{ t('footer.builtBy') }}
        <span class="accent">Samuel Chávez</span>
      </p>
      <p class="home__footer-sub">
        © {{ new Date().getFullYear() }} — {{ t('footer.madeWith') }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.home__footer {
  padding: var(--space-2xl) 0 var(--space-3xl);
  border-top: 2px solid var(--color-rule-strong);
}

.home__footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-md);
  font-family: var(--font-serif);
}

.home__footer-sub {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  align-self: center;
}
</style>
