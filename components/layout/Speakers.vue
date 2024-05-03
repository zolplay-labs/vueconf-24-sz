<script setup lang="ts">
import VueLogo from '~/components/icons/VueLogo.vue'
import ViteLogo from '~/components/icons/ViteLogo.vue'
import VitestLogo from '~/components/icons/VitestLogo.vue'
import NuxtLogo from '~/components/icons/NuxtLogo.vue'
import PiniaLogo from '~/components/icons/PiniaLogo.vue'

interface Speaker {
  name: string;
  title: string;
  description: string;
  avatar: string;
  influences?: string[];
};

const speakers = ref<Speaker[]>([{
  name: 'Evan You',
  title: 'Creator of Vue.js and Vite',
  description: '尤雨溪是一名独立开源开发者，也是 Vue 和 Vite 的作者。<br /><br />编程之外，他大部分时间在新加坡带娃，或是在世界各地参加技术会议。闲暇时候他喜欢看漫画，玩魂系/肉鸽游戏，最近为了找个运动爱好在学羽毛球。',
  avatar: 'https://img2.w3ctech.com/evan.jpg',
  influences: ['vue', 'vite'],
}, {
  name: 'Anthony Fu',
  title: 'Vue.js、Vite、NuxtLab 核心团队成员，VueUse、Vitest、UnoCSS 作者',
  description: 'Anthony Fu 是一位狂热的开源爱好者和技术创造者。他目前在 NuxtLabs 工作，并是 Vue、Nuxt 和 Vite 的核心团队成员。他热衷于将想法付诸实践，并在开源社区中不断推动技术创新。<br /><br />编程之外，Anthony 也热爱摄影和旅行。现居法国巴黎，他常游走各地参加技术会议与社区交流。在技术方面选型方面有很强的主张，但也一直没学会 Rust。',
  avatar: 'https://static.fequan.com/vueconf/speakers/antfu.png',
  influences: ['vue', 'vite', 'nuxt', 'vitest'],
}, {
  name: 'Eduardo San Martin Morote',
  title: 'Creator of Pinia and Vue Router Mastering Pinia instructor',
  description: 'Eduardo (posva) 是一位前端开发者，兼职 Vue.js 核心团队成员，也是 Vue Router、Pinia、VueFire 等库的作者。他对开源非常投入，喜欢开发和维护且经过测试的前端架构。<br /><br />He\'s very invested in Open Source, and loves developing maintainable and tested front end architectures.',
  avatar: 'https://static.fequan.com/vueconf/speakers/posva.jpg',
  influences: ['vue', 'pinia'],
}, {
  name: '勾三股四（赵锦江）',
  title: 'Vue.js 核心团队成员',
  description: '赵锦江 (Jinjiang)，2014 年加入 Vue.js 团队至今。播客节目《代码之外 Beyond Code》常驻嘉宾。现居新加坡，远程任职于 Bit。<br /><br />近 20 年互联网从业经验。曾任 W3C HTML 中文兴趣组联合主席。曾任职于阿里巴巴，花名勾股。曾创立 996 乐队，为程序员和上班族发声。足球爱好者。',
  avatar: 'https://cdn.fequan.com/vueconf/speakers/jinjiang.jpg',
  influences: ['vue'],
}, {
  name: 'ShenQingChuan',
  title: 'SHEIN 前端工程师，Vue / Vite / Rollup 中文文档译者和维护者，Vue Vine 作者',
description: 'Shenqingchuan 热衷于技术学习、探索和开源社区活动，也是一名前端追星SSR集卡活动爱好者，非常期待这次能认识更多朋友。<br /><br />在编程之外，他喜欢摄影和旅游，喜欢玩无畏契约，也喜欢和朋友一起去唱卡拉OK。哦对了，他也一直没学会Rust。',
  avatar: 'https://static.fequan.com/vueconf/speakers/sqc.jpg',
  influences: ['vue', 'vite'],
}, {
  name: '三咲智子',
  title: 'Vue.js 核心团队成员，Vue Vapor / Vue Macros 作者',
  description: '三咲智子（Kevin Deng）是一位开源软件爱好者，同时也是最年轻的 Vue 核心成员。目前专注于 Vue Vapor 和编译器的相关开发。智子也喜欢探索各种新鲜的事物。<br /><br />在代码之外，智子现居美食荒漠，喜欢吃麦麦，热爱旅行。平时也喜欢摸鱼和吃瓜。值得一提的是，智子也没学会 Rust。',
  avatar: 'https://static.fequan.com/vueconf/speakers/zhizi.jpg',
  influences: ['vue'],
}, {
  name: 'Arlo',
  title: 'Vue.js / VueUse 团队成员，Vue DevTools Next 作者',
  description: 'Arlo 是一位开源爱好者，常活跃于 Vue.js 生态。折腾过一些小工具和项目，目前主要在维护 Vue DevTools。<br /><br />在编程之外，Arlo 是一个电影迷宅，喜欢追悬疑剧。哦还有，他最近准备开始第三次学习 Rust。',
  avatar: 'https://static.fequan.com/vueconf/speakers/arlo.jpg',
  influences: ['vue'],
}]);
const focusingSpeakerIdx = ref<number|null>(null);
function focusSpeaker(idx: number | null) {
  focusingSpeakerIdx.value = idx;
}

const logoMap = {
  vue: VueLogo,
  vite: ViteLogo,
  vitest: VitestLogo,
  nuxt: NuxtLogo,
  pinia: PiniaLogo,
}
function getLogo(influence: string) {
  return logoMap[influence] || null;
}
</script>

<template>
  <section class="my-24 px-4 md:px-0 flex flex-col justify-center items-center max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 group" :data-focusing="focusingSpeakerIdx !== null">
    <header class="h-64 md:h-48 col-[1/3] sm:col-[1/4] md:col-[1/5] flex justify-center items-center border border-dashed border-[--grid-color] border-b-0 relative sticky -top-0.5 z-30 bg-gradient-to-b from-[#16241B] via-[#16241B]">
      <h2
          class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-zinc-500 tracking-tight mix-blend-plus-lighter text-center text-balance"
          :class="{ 'opacity-25 text-4xl md:text-5xl': focusingSpeakerIdx !== null, 'opacity-100 text-5xl md:text-6xl': focusingSpeakerIdx === null }"
      >
        {{ focusingSpeakerIdx === null ? 'Speakers' : speakers[focusingSpeakerIdx].name }}
      </h2>
      <span class="absolute inset-0 p-4 md:p-8 flex items-center justify-center text-white/70 mix-blend-screen text-center text-balance text-[0.95em]" v-if="focusingSpeakerIdx !== null" v-html="speakers[focusingSpeakerIdx].description" />
    </header>

    <div v-for="(speaker, idx) in speakers" :key="speaker.name" class="relative col-span-1 aspect-square border border-dashed border-[--grid-color] z-20 transition-opacity"
         :class="{ 'group-data-[focusing=true]:opacity-40': focusingSpeakerIdx !== idx }" @mouseenter="focusSpeaker(idx)" @mouseleave="focusSpeaker(null)" @click="focusSpeaker(idx)">
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0" width="100%" height="100%">
        <defs>
          <filter id="filter">
            <feGaussianBlur stdDeviation="28" />
          </filter>
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" filter="url(#filter)"></rect>
          </mask>
        </defs>

        <image :href="speaker.avatar"  mask="url(#mask)" width="100%" height="100%"></image>
      </svg>
      <footer class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0D3C22] flex justify-between items-end px-2 py-1">
        <span class="text-zinc-300 text-lg tracking-tight font-semibold max-w-[10ch] text-balance leading-tight mix-blend-plus-lighter">{{ speaker.name }}</span>
        <ul class="flex items-end pb-1 space-x-0.5">
          <li v-for="influence in speaker.influences" :key="influence" class="inline-block">
            <component :is="getLogo(influence)" class="size-4" fill="none" />
          </li>
        </ul>
      </footer>
    </div>

    <div class="col-[2/3] row-[5/6] sm:col-[2/4] sm:row-[4/5] md:col-[4/5] md:row-[3/4] border border-dashed border-[--grid-color] h-full"></div>
  </section>
</template>
