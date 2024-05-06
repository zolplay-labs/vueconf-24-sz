<script setup lang="ts">
interface SponsorLike {
  name: string;
  title: string;
  logo: string;
  url: string;
}

const sponsors = ref<SponsorLike[]>([
  {
    name: '又拍云',
    title: 'CDN赞助商',
    logo: 'https://static.fequan.com/feday/sponsor/upyun_logo.png',
    url: 'https://www.upyun.com'
  },
  {
    name: '保利威',
    title: '视频合作伙伴',
    logo: 'https://static.fequan.com/feday/sponsor/polyv_logo.png',
    url: 'https://www.polyv.net'
  },
])
const communities = ref<SponsorLike[]>([
  {
    name: '稀土掘金',
    title: '支持社区',
    logo: 'https://static.fequan.com/feday/sponsor/juejin_logo.png',
    url: 'https://juejin.cn'
  },
  {
    name: 'w3cplus',
    title: '支持社区',
    logo: 'https://static.fequan.com/feday/sponsor/w3cplus_logo.png',
    url: 'https://www.w3cplus.com'
  }
])
</script>

<template>
  <section class="my-24 px-4 md:px-0 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 group">
    <header class="h-64 md:h-48 col-span-2 sm:col-span-3 md:col-span-4 flex flex-col space-y-3 justify-center items-center border border-dashed border-[--grid-color] border-b-0 relative sticky -top-0.5 z-30 bg-gradient-to-b from-[#16241B] via-[#16241B]">
      <h2 class="font-bold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-zinc-500 tracking-tight mix-blend-plus-lighter text-center text-balance">
        Sponsors
      </h2>
      <p class="text-white/70 text-center">如果你想赞助本次大会，请直接与我们联系apply#fequan.com</p>
    </header>

    <div class="relative col-span-2 sm:col-span-3 md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      <div class="md:contents hidden">
        <!-- Dividers for md -->
        <div class="absolute top-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="absolute bottom-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
<!--        <div class="row-start-2 absolute h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(&#45;&#45;grid-color),var(&#45;&#45;grid-color)_4px,transparent_4px,transparent_10px)]" />-->
        <div class="col-start-1 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-2 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-3 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-4 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-5 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
      </div>
      <div class="hidden sm:contents md:hidden">
        <!-- Dividers for sm -->
        <div class="absolute top-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="absolute bottom-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-1 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-2 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-3 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-4 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
      </div>
      <div class="contents sm:hidden">
        <!-- Dividers for sm -->
        <div class="absolute top-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="absolute bottom-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-1 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-2 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-3 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
      </div>

      <template v-for="sponsor in sponsors" :key="sponsor.name">
        <a :href="sponsor.url" target="_blank" class="flex aspect-[5/3] flex-col items-center justify-center p-4 border border-transparent">
          <img :src="sponsor.logo" class="h-20 w-auto mix-blend-plus-lighter" :title="sponsor.title" :alt="sponsor.title" />
        </a>
      </template>
    </div>

    <div class="col-span-2 sm:col-span-3 md:col-span-4 row-span-1 h-64 md:h-48 flex flex-col space-y-3 justify-center items-center border border-dashed border-[--grid-color] border-y-0 relative sticky -top-0.5 z-30 bg-gradient-to-b from-[#16241B] via-[#16241B]">
      <h2 class="font-bold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-zinc-500 tracking-tight mix-blend-plus-lighter text-center text-balance">
        Communities
      </h2>
      <p class="text-white/70 text-center">社区支持</p>
    </div>

    <div class="relative col-span-2 sm:col-span-3 md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      <div class="md:contents hidden">
        <!-- Dividers for md -->
        <div class="absolute top-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="absolute bottom-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <!--        <div class="row-start-2 absolute h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(&#45;&#45;grid-color),var(&#45;&#45;grid-color)_4px,transparent_4px,transparent_10px)]" />-->
        <div class="col-start-1 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-2 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-3 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-4 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-5 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
      </div>
      <div class="hidden sm:contents md:hidden">
        <!-- Dividers for sm -->
        <div class="absolute top-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="absolute bottom-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-1 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-2 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-3 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-4 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
      </div>
      <div class="contents sm:hidden">
        <!-- Dividers for sm -->
        <div class="absolute top-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="absolute bottom-0 h-px inset-x-0 bg-[repeating-linear-gradient(90deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-1 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-2 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
        <div class="col-start-3 absolute w-px inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-color),var(--grid-color)_4px,transparent_4px,transparent_10px)]" />
      </div>

      <template v-for="community in communities" :key="community.name">
        <a :href="community.url" target="_blank" class="flex aspect-[5/3] flex-col items-center justify-center p-4 border border-transparent">
          <img :src="community.logo" class="h-20 w-auto mix-blend-plus-lighter" :title="community.title" :alt="community.title" />
        </a>
      </template>
    </div>
  </section>
</template>
