<script setup>
import Hero from "../templates/Hero.vue";
import HeroBottom from '../templates/HeroBottom.vue';
</script>

<template>
  <div class="flex flex-col w-full gap-[70px]">
    <div class="bg-[#1B3764] w-full h-full lg:h-screen pt-[130px] pb-[20px]">
      <div class="contenr">
        <Hero />
      </div>
    </div>
    <div class="contenr lg:mt-0 mt-[120px]">
      <HeroBottom />
    </div>
  </div>
</template>
