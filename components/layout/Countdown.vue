<template>
  <section class="my-12 h-[30vh] md:h-[clamp(320px,40vh,400px)] px-4 md:px-0 flex flex-col justify-center items-center max-w-3xl mx-auto grid grid-cols-4 grid-rows-2">
    <header class="col-[1/5] row-[1/2] h-full flex justify-center items-center border border-dashed border-[--grid-color] border-b-0">
      <h2 class="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-zinc-500 tracking-tight mix-blend-plus-lighter">
        Countdown
      </h2>
    </header>
    <div
        class="col-[1/2] row-[2/3] flex flex-col justify-center items-center h-full border border-dashed border-[--grid-color] border-r-0 text-zinc-100 tabular-nums select-none space-y-2"
        :class="{ 'text-zinc-200/5': timeLeft == null }"
    >
      <span class="text-[2.5rem]/[2.5rem] md:text-[4.5rem]/[3.85rem] font-medium">{{ timeLeft?.days ?? 0 }}</span>
      <span class="text-[1.1rem]/6 md:text-[1.5rem]/8 font-medium">天</span>
    </div>
    <div
        class="col-[2/3] row-[2/3] flex flex-col justify-center items-center h-full border border-dashed border-[--grid-color] border-r-0 text-zinc-100 tabular-nums select-none space-y-2"
        :class="{ 'text-zinc-200/5': timeLeft == null }"
    >
      <span class="text-[2.5rem]/[2.5rem] md:text-[4.5rem]/[3.85rem] font-medium">{{ timeLeft?.hours ?? 0 }}</span>
      <span class="text-[1.1rem]/6 md:text-[1.5rem]/8 font-medium">小时</span>
    </div>
    <div
        class="col-[3/4] row-[2/3] flex flex-col justify-center items-center h-full border border-dashed border-[--grid-color] border-r-0 text-zinc-100 tabular-nums select-none space-y-2"
        :class="{ 'text-zinc-200/5': timeLeft == null }"
    >
      <span class="text-[2.5rem]/[2.5rem] md:text-[4.5rem]/[3.85rem] font-medium">{{ timeLeft?.minutes ?? 0 }}</span>
      <span class="text-[1.1rem]/6 md:text-[1.5rem]/8 font-medium">分</span>
    </div>
    <div
        class="col-[4/5] row-[2/3] flex flex-col justify-center items-center h-full border border-dashed border-[--grid-color] text-zinc-100 tabular-nums space-y-2 select-none"
        :class="{ 'text-zinc-200/5': timeLeft == null }"
    >
      <span class="text-[2.5rem]/[2.5rem] md:text-[4.5rem]/[3.85rem] font-medium">{{ timeLeft?.seconds ?? 0 }}</span>
      <span class="text-[1.1rem]/6 md:text-[1.5rem]/8 font-medium">秒</span>
    </div>

    <div class="col-[1/5] row-[2/3] h-full flex items-center justify-center" v-if="timeLeft === null">
      <p class="text-4xl text-zinc-200 font-bold">大会已开始</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'Countdown',
  setup() {
    const timeLeft = ref<{ days: string; hours: string; minutes: string; seconds: string } | null | undefined>(undefined);

    function padNumber(n: number) {
      return n.toString().padStart(2, '0');
    }

    function updateCountdown() {
      const now = new Date();
      const targetDate = new Date('2024-07-06T09:30:00');
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = padNumber(Math.floor(difference / (1000 * 60 * 60 * 24)));
        const hours = padNumber(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = padNumber(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = padNumber(Math.floor((difference % (1000 * 60)) / 1000));

        timeLeft.value = { days, hours, minutes, seconds };
      } else {
        timeLeft.value = null; // Indicates the countdown is over
      }
    }

    let intervalId: number | undefined;

    onMounted(() => {
      updateCountdown(); // Initial update
      intervalId = window.setInterval(updateCountdown, 1000); // Update every second
    });

    onUnmounted(() => {
      if (intervalId) clearInterval(intervalId);
    });

    return { timeLeft };
  },
});
</script>
