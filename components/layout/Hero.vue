<script setup lang="ts">
import TicketQR from '~/components/TicketQR.vue'
</script>

<template>
  <header id="hero" class="relative min-h-screen overflow-hidden">
    <div class="absolute bottom-0 inset-x-0 mix-blend-overlay overflow-hidden">
      <ShenzhenSkyline class="h-[28vh] md:h-[clamp(280px,52vh,450px)] mx-auto -translate-x-[7.5vh] md:-translate-x-10 pointer-events-none" />
    </div>

    <div class="pt-4 md:pt-24 max-w-3xl mx-auto relative h-[85vh] md:h-[clamp(400px,60vh,470px)] grid grid-cols-4 grid-rows-4 md:grid-cols-10 md:grid-rows-10 gap-1 md:gap-2">
      <div id="lines" class="absolute inset-0 opacity-80 pointer-events-none">
        <svg class="absolute left-0 translate-x-4 md:translate-x-0 top-0 h-full" width="1" viewBox="0 0 1 623" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18557e-08" x2="0.499973" y2="623" stroke="url(#paint0_linear_4_1494)" stroke-dasharray="6 6" />
          <defs>
            <linearGradient id="paint0_linear_4_1494" x1="-0.5" y1="-2.18557e-08" x2="-0.500027" y2="623" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2CE27E" stop-opacity="0.35" />
              <stop offset="1" stop-color="#2CE27E" stop-opacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
        <svg class="absolute opacity-0 md:opacity-100 top-24 left-0 -translate-x-20 w-[calc(100%+10rem)]" height="1" viewBox="0 0 1255 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="4.37114e-08" y1="0.5" x2="1255" y2="0.50011" stroke="url(#paint0_linear_4_1490)" stroke-dasharray="8 8" />
          <defs>
            <linearGradient id="paint0_linear_4_1490" x1="-4.37114e-08" y1="1.5" x2="1255" y2="1.50011" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2CE27E" stop-opacity="0.35" />
              <stop offset="1" stop-color="#2CE27E" stop-opacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
        <svg class="h-full right-0 absolute top-0 -translate-x-4 md:translate-x-0" width="1" viewBox="0 0 1 511" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18557e-08" x2="0.499978" y2="511" stroke="url(#paint0_linear_4_1492)" stroke-opacity="0.25" stroke-dasharray="6 6" />
          <defs>
            <linearGradient id="paint0_linear_4_1492" x1="-0.5" y1="-2.18557e-08" x2="-0.500022" y2="511" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2CE27E" stop-opacity="0" />
              <stop offset="0.192787" stop-color="#28CE73" stop-opacity="0.9" />
              <stop offset="0.908517" stop-color="#28CE73" stop-opacity="0.9" />
              <stop offset="1" stop-color="#28CE73" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg class="absolute opacity-0 md:opacity-100 bottom-0 left-0 -translate-x-20 w-[calc(100%+10rem)]" height="1" viewBox="0 0 1255 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="-4.37114e-08" y1="0.5" x2="1255" y2="0.49989" stroke="url(#paint0_linear_4_1493)" stroke-dasharray="8 8" />
          <defs>
            <linearGradient id="paint0_linear_4_1493" x1="4.37114e-08" y1="1.5" x2="1255" y2="1.49989" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2CE27E" stop-opacity="0.05" />
              <stop offset="0.0964324" stop-color="#2CE27E" stop-opacity="0.35" />
              <stop offset="0.696046" stop-color="#2CE27E" stop-opacity="0.05" />
              <stop offset="1" stop-color="#2CE27E" stop-opacity="0.11" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="col-[1/5] row-[1/2] md:col-[1/6] md:row-[1/7] flex flex-col items-start justify-center relative pl-6 md:pl-4">
        <svg class="w-[calc(48rem+10rem)] absolute bottom-0 left-0 -translate-x-[6rem]" height="1" viewBox="0 0 1258 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="4.37114e-08" y1="0.5" x2="1258" y2="0.50011" stroke="white" stroke-opacity="0.15" stroke-dasharray="8 8" />
        </svg>

        <h1 class="text-[21.5vw]/[23vw] md:text-[5.8rem]/[7rem] font-bold text-vue-green mix-blend-plus-lighter tracking-tight">
          VueConf
        </h1>
        <h2 class="text-[12vw]/[12vw] md:text-[3.2rem]/[4.5rem] font-medium tracking-tight">
          Shenzhen / 深圳
        </h2>
      </div>

      <div class="col-[1/5] row-[2/3] md:col-[1/6] md:row-[7/11] flex flex-col justify-center items-start px-6 md:px-4 space-y-4 md:space-y-2">
        <time datetime="2024-07-06" class="font-medium text-[2rem]/7 md:text-[2.5rem]/9 text-zinc-300">
          2024.07.06
        </time>
        <p class="text-zinc-400 text-base tracking-tight text-balance">
          官方主办为全球 <a href="https://vuejs.org" target="_blank" class="underline text-vue-green">Vue.js</a> 开发者带来一场技术盛宴。
        </p>
      </div>

      <div class="hidden md:col-[6/8] md:row-[1/11] md:block relative">
        <svg class="absolute left-6 md:left-0 -top-20 h-[calc(100%+10rem)]" width="1" viewBox="0 0 1 513" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18557e-08" x2="0.499978" y2="513" stroke="url(#paint0_linear_5_1531)" stroke-opacity="0.25" stroke-dasharray="6 6" />
          <defs>
            <linearGradient id="paint0_linear_5_1531" x1="-0.5" y1="-2.18557e-08" x2="-0.500022" y2="513" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2CE27E" stop-opacity="0" />
              <stop offset="0.192787" stop-color="#28CE73" stop-opacity="0.7" />
              <stop offset="0.908517" stop-color="#28CE73" stop-opacity="0.55" />
              <stop offset="1" stop-color="#28CE73" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg class="absolute right-0 opacity-50 -top-24 h-[calc(100%+10rem)]" width="1" viewBox="0 0 1 513" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18557e-08" x2="0.499978" y2="513" stroke="url(#paint0_linear_5_1531)" stroke-opacity="0.25" stroke-dasharray="6 6" />
          <defs>
            <linearGradient id="paint0_linear_5_1531" x1="-0.5" y1="-2.18557e-08" x2="-0.500022" y2="513" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2CE27E" stop-opacity="0" />
              <stop offset="0.192787" stop-color="#28CE73" stop-opacity="0.7" />
              <stop offset="0.908517" stop-color="#28CE73" stop-opacity="0.55" />
              <stop offset="1" stop-color="#28CE73" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="md:col-[8/11] md:row-[1/7] hidden md:flex items-center justify-center">
        <TicketQR class="size-40" />
      </div>

      <div class="col-[1/5] row-[3/4] md:col-[8/11] md:row-[7/11] px-4 md:px-0 flex flex-col justify-start md:justify-center items-center">
        <span class="text-zinc-200 text-[1.7rem]/7 tracking-tight hidden md:block">微信扫码购票</span>
        <span class="text-zinc-300 text-sm hidden md:block">
          Scan QR Code in WeChat
        </span>
        <a
          href="https://www.fequan.com/m_weixin/activity/buy_ticket?activity_id=28"
          class="border-2 border-vue-green border-dashed bg-green-500/10 text-zinc-100 w-full py-2 text-center flex md:hidden gap-1.5 justify-center items-center h-20 text-xl font-bold tracking-tight"
        >
          前往购票
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3z" /></svg>
        </a>
      </div>

      <div class="absolute bottom-[10vh] inset-x-0 flex items-center justify-center hidden md:block md:-left-16 md:top-8">
        <img src="~/assets/vue-badge.png" alt="Vue Badge" class="size-20 md:size-16">
      </div>
    </div>
  </header>
</template>
