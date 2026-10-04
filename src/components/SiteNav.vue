<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const links = [
  { id: 'skills', num: 'I' },
  { id: 'experience', num: 'II' },
  { id: 'now', num: 'III' },
  { id: 'influences', num: 'IV' },
]

const theme = ref('auto')

const applyTheme = value => {
  if (value === 'auto') document.documentElement.removeAttribute('data-theme')
  else document.documentElement.setAttribute('data-theme', value)
}

const isDark = () =>
  theme.value === 'dark' ||
  (theme.value === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)

const toggleTheme = () => {
  theme.value = isDark() ? 'light' : 'dark'
  applyTheme(theme.value)
  try { localStorage.setItem('theme', theme.value) } catch {}
}

const languages = ['es', 'en', 'pt']

const setLanguage = lang => {
  locale.value = lang
  document.documentElement.lang = locale.value
  try { localStorage.setItem('locale', locale.value) } catch {}
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      theme.value = saved
      applyTheme(saved)
    }
  } catch {}
  document.documentElement.lang = locale.value
})
</script>

<template>
  <header class="nav">
    <div class="container nav__inner">
      <a href="#top" class="nav__brand">S. Chávez</a>

      <nav class="nav__links" :aria-label="t('nav.label')">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`" class="nav__link">
          <span class="nav__num">{{ link.num }}</span>{{ t(`nav.${link.id}`) }}
        </a>
      </nav>

      <div class="nav__controls">
        <div class="nav__langs" role="group" :aria-label="t('nav.language')">
          <template v-for="(lang, i) in languages" :key="lang">
            <span v-if="i" aria-hidden="true">/</span>
            <button
              class="nav__lang"
              :class="{ 'nav__on': locale === lang }"
              :aria-pressed="locale === lang"
              @click="setLanguage(lang)"
            >{{ lang.toUpperCase() }}</button>
          </template>
        </div>
        <button class="nav__btn" @click="toggleTheme" :aria-label="t('nav.theme')">◐</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--color-bg) 88%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-rule);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  height: 3.5rem;
}

.nav__brand {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: var(--text-lg);
}

.nav__links {
  display: flex;
  gap: var(--space-xl);
}

.nav__link {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  transition: color var(--transition);
}

.nav__link:hover {
  color: var(--color-accent);
}

.nav__num {
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--color-accent);
  margin-right: 0.4em;
}

.nav__controls {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.nav__btn {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  padding: var(--space-xs) var(--space-sm);
  border: 1px solid var(--color-rule);
  border-radius: 2px;
  transition: all var(--transition);
}

.nav__btn:hover {
  color: var(--color-text);
  border-color: var(--color-rule-strong);
}

.nav__langs {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  padding: var(--space-xs) var(--space-sm);
  border: 1px solid var(--color-rule);
  border-radius: 2px;
}

.nav__lang {
  font: inherit;
  color: inherit;
  padding: 0 2px;
}

.nav__lang:hover {
  color: var(--color-text);
}

.nav__on {
  color: var(--color-accent);
  font-weight: 600;
}

@media (max-width: 768px) {
  .nav__links {
    display: none;
  }
}
</style>
