<script setup>
/**
 * Home Page
 * Assembles all sections into the main landing page
 */
import Hero from '@/components/Hero.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Experience from '@/components/Experience.vue'
import Writing from '@/components/Writing.vue'
import Now from '@/components/Now.vue'
import Influences from '@/components/Influences.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="home">
    <Hero />
    <Skills />
    <!--<Projects />-->
    <Experience />
    <!--<Writing />-->
    <Now />
    <Influences />

    <!-- Footer -->
    <footer class="home__footer">
      <div class="container home__footer-content">
        <p class="home__footer-text">
          {{ t('footer.builtBy') }}
          <span class="gradient-text">Samuel Chávez</span>
        </p>
        <p class="home__footer-sub">
          © {{ new Date().getFullYear() }} — {{ t('footer.madeWith') }}
        </p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.home__footer {
  padding: var(--space-3xl) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.home__footer-content {
  text-align: center;
}

.home__footer-text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xs);
}

.home__footer-sub {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}
</style>
