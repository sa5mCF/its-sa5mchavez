import { onMounted, onBeforeUnmount } from 'vue'

/**
 * Adds `reveal--in` to every `.reveal` element inside the component's
 * root once it scrolls into view.
 */
export function useReveal(rootRef) {
  let observer

  onMounted(() => {
    const els = rootRef.value?.querySelectorAll('.reveal') ?? []
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('reveal--in'))
      return
    }
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach(el => observer.observe(el))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
