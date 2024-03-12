import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('parallax', {
    mounted(element: ExtendedHTMLElement, binding: { value: NuxtParallaxOptions }) {
      // save original transform style
      element._originalTransform = window.getComputedStyle(element).transform
      if(element._originalTransform === 'none') element._originalTransform = undefined

      console.log(element._originalTransform)

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
  _originalTransform?: string
}

interface NuxtParallaxOptions {
  speed: number
}

function handleScroll(element: ExtendedHTMLElement, options: NuxtParallaxOptions): void {
  if (!element || !isElementInViewport(element)) return

  const scrollY = -window.scrollY * options.speed
  const scrollX = 0 // -window.scrollX * options.speedX

  
  requestAnimationFrame(() => {
    // Always apply the new transform, regardless of whether an original transform exists
    element.style.transform = `${element._originalTransform ? `${element._originalTransform} ` : ''}translate3d(${ scrollX }px, ${scrollY}px, 0)`
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
