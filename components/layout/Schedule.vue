<script setup lang="ts">
interface ScheduleItem {
  time: string
  title: string
  description?: string
}

const schedule: ScheduleItem[] = [
  {
    time: '09:30',
    title: '签到',
    description: '会议当日，建议提前半小时到达活动现场，按照工作人员指引，有序排队，扫描二维码进行签到，并依次领取会议卡牌、纪念品。',
  },
  {
    time: '12:00',
    title: '午餐',
  },
  {
    time: '16:00',
    title: '茶歇',
  },
  {
    time: '18:30',
    title: '结束',
  },
]
</script>

<template>
  <section class="my-24 px-4 md:px-0 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 group">
    <header class="h-64 md:h-48 col-span-2 sm:col-span-3 md:col-span-4 flex flex-col space-y-3 justify-center items-center border border-dashed border-[--grid-color] border-b-0 relative sticky -top-0.5 z-30 bg-gradient-to-b from-[#16241B] via-[#16241B]">
      <h2 class="font-bold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-zinc-500 tracking-tight mix-blend-plus-lighter text-center text-balance">
        Schedule
      </h2>
      <p class="text-white/70 text-center">
        大会议程
      </p>
    </header>

    <div class="col-span-4 py-24 relative border border-dashed border-[--grid-color]">
      <div class="pointer-events-none absolute inset-0 z-20 overflow-hidden xl:min-w-[32rem] xl:overflow-visible">
        <svg
          class="absolute left-4 md:left-48 top-0 h-full w-1.5 lg:ml-1 xl:ml-0 opacity-35"
          aria-hidden="true"
        >
          <defs>
            <pattern id="timeline" width="6" height="8" patternUnits="userSpaceOnUse">
              <path
                d="M0 0H6M0 8H6"
                class="stroke-[--grid-color]"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#timeline)" />
        </svg>
        <svg
          class="absolute right-4 md:right-48 top-0 h-full w-1.5 lg:ml-1 xl:ml-0 opacity-35"
          aria-hidden="true"
        >
          <defs>
            <pattern id="timeline" width="6" height="8" patternUnits="userSpaceOnUse">
              <path
                d="M0 0H6M0 8H6"
                class="stroke-[--grid-color]"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#timeline)" />
        </svg>
      </div>

      <div class="max-w-xs mx-auto">
        <template v-for="item in schedule">
          <div class="relative flex flex-col items-center my-8">
            <div class="absolute left-0 md:-left-[1.92rem] top-4 h-[0.0625rem] w-3.5 lg:mr-3.5 xl:mr-0 bg-zinc-300" />
            <div class="absolute right-0 md:-right-[1.92rem] top-4 h-[0.0625rem] w-3.5 lg:mr-3.5 xl:mr-0 bg-zinc-300" />
            <div class="flex-shrink-0 flex text-white/80 font-medium text-lg">
              {{ item.time }}
            </div>
            <div class="px-2 text-balance text-center space-y-2">
              <h3 class="font-bold text-lg text-vue-green">{{ item.title }}</h3>
              <p class="text-zinc-500 text-sm">{{ item.description }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
