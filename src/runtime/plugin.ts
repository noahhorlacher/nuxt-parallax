import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by nuxt-parallax!')
})

import { handleScroll, debounce } from './lib/plugin.js'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by nuxt-parallax!')
  meta: {
    name: 'nuxt-3-prlx',
    configKey: 'nuxt3Prlx',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {},
  setup(options, nuxt) {
    nuxt.hook('app:setup', (app) => {
        return {
            directives: {
                prlx: {
                    mounted(el, binding) {
                        const opts = { speed: binding.value.speed || 1 }
                        const debouncedHandleScroll = debounce(() => handleScroll(el, opts), 10)
            
                        el._handleScroll = () => debouncedHandleScroll()
                        window.addEventListener('scroll', el._handleScroll)
                    },
                    unmounted(el) {
                        window.removeEventListener('scroll', el._handleScroll)
                        delete el._handleScroll
                    }
                }
            }
        }
    })
  },
})
