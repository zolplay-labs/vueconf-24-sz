import BackgroundGradient from '~/components/BackgroundGradient.vue'
import Hero from '~/components/layout/Hero.vue'

export default defineComponent({
  setup() {
    // https://nuxt.com/docs/getting-started/seo-meta
    useHead({
      title: 'VueConf 2024 深圳',
    });
    useSeoMeta({
      title: 'VueConf 2024 深圳',
      description: 'VueConf 2024 将于 2024 年 7 月 6 日在中国深圳举办！作为 Vue.js 官方主办的盛会，本次大会将为全球 Vue.js 开发者带来一场前所未有的技术盛宴。',
      ogDescription() {
          return 'VueConf 2024 将于 2024 年 7 月 6 日在中国深圳举办！作为 Vue.js 官方主办的盛会，本次大会将为全球 Vue.js 开发者带来一场前所未有的技术盛宴。'
      },
      ogImage() {
          return '/og.png'
      }
    });
  },
  render() {
    return <div class="relative min-h-screen">
      <BackgroundGradient />

      <Hero />
    </div>
  },
});
