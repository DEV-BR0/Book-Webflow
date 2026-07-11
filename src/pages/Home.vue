<script setup>
import Hero from "../templates/Hero.vue";
import HeroBottom from '../templates/HeroBottom.vue';
</script>

<template>
  <div class="flex flex-col w-full gap-[30px]">
    <div class="bg-[#1B3764] w-full h-full sm:h-full pt-[130px] pb-[20px]">
      <div class="contenr">
        <Hero />
      </div>
    </div>
    <div class="contenr">
      <HeroBottom />
    </div>
  </div>
</template>
