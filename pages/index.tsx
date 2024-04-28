export default defineComponent({
  setup() {
    // https://nuxt.com/docs/getting-started/seo-meta
    useHead({});
    useSeoMeta({});
  },
  render() {
    return <h1 class={'text-5xl'}>Hello vue</h1>;
  },
});
