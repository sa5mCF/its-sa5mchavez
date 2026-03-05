<script setup>
/**
 * Writing Section
 * Blog posts, articles, or technical writing showcase
 */
const posts = [
  {
    title: 'Artículo o Post 1',
    excerpt: 'Un resumen breve del contenido del artículo. Puede ser sobre tecnología, desarrollo o aprendizaje.',
    date: '2025-01-15',
    readTime: '5 min',
    tags: ['Vue.js', 'Frontend'],
    url: '#',
  },
  {
    title: 'Artículo o Post 2',
    excerpt: 'Un resumen breve del contenido del artículo. Puede ser sobre tecnología, desarrollo o aprendizaje.',
    date: '2024-11-20',
    readTime: '8 min',
    tags: ['Backend', 'Node.js'],
    url: '#',
  },
  {
    title: 'Artículo o Post 3',
    excerpt: 'Un resumen breve del contenido del artículo. Puede ser sobre tecnología, desarrollo o aprendizaje.',
    date: '2024-09-10',
    readTime: '4 min',
    tags: ['DevOps', 'Docker'],
    url: '#',
  },
]

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <section id="writing" class="writing section">
    <div class="container">
      <span class="section-label">// escritura</span>
      <h2 class="section-title">
        Notas &amp; <span class="gradient-text">Artículos</span>
      </h2>
      <p class="section-subtitle">
        Reflexiones, tutoriales y aprendizajes que comparto con la comunidad.
      </p>

      <div class="writing__list">
        <a
          v-for="post in posts"
          :key="post.title"
          :href="post.url"
          class="writing__post glass-card"
        >
          <div class="writing__post-meta">
            <span class="writing__date">{{ formatDate(post.date) }}</span>
            <span class="writing__separator">·</span>
            <span class="writing__read-time">{{ post.readTime }} lectura</span>
          </div>

          <h3 class="writing__post-title">
            {{ post.title }}
            <span class="writing__arrow">↗</span>
          </h3>

          <p class="writing__excerpt">{{ post.excerpt }}</p>

          <div class="writing__tags">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.writing__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-3xl);
}

.writing__post {
  display: block;
  padding: var(--space-xl);
  text-decoration: none;
  transition: all var(--transition-base);
}

.writing__post:hover .writing__arrow {
  transform: translate(4px, -4px);
  opacity: 1;
}

.writing__post-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.writing__date,
.writing__read-time {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.writing__separator {
  color: var(--color-text-muted);
}

.writing__post-title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.writing__arrow {
  font-size: var(--text-sm);
  color: var(--color-accent-primary);
  opacity: 0;
  transform: translate(0, 0);
  transition: all var(--transition-base);
}

.writing__excerpt {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-md);
}

.writing__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}
</style>
