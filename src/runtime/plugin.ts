import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('parallax', {
    mounted(element: ExtendedHTMLElement, binding: { value: NuxtParallaxOptions }) {
      const sanitizedOptions = { speed: binding.value.speed || 1 }
      const debouncedHandleScroll = debounce(() => handleScroll(element, sanitizedOptions), 10)

      element._handleScroll = () => debouncedHandleScroll()
      window.addEventListener('scroll', (element as any)._handleScroll)
    },
    unmounted(el: HTMLElement) {
      window.removeEventListener('scroll', (el as any)._handleScroll)
      delete (el as any)._handleScroll
    }
  })
})

interface ExtendedHTMLElement extends HTMLElement {
  _handleScroll?: () => void
}

interface NuxtParallaxOptions {
  speed: number
}

function handleScroll(element: HTMLElement, options: NuxtParallaxOptions): void {
  if (!element || !isElementInViewport(element)) return

  const scrollY = -window.scrollY * options.speed
  requestAnimationFrame(() => {
    element.style.translate = `0px ${scrollY}px` // Use transform for better performance
  })
}

function isElementInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function debounce(callback: Function, delay: number) {
  let inDebounce: number | ReturnType<typeof setTimeout> | null = null

  return function(this: any, ...args: any) {
    clearTimeout(inDebounce as number)
    inDebounce = setTimeout(() => callback.apply(this, args), delay)
  }
}
