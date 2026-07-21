<script setup>
import Author from "../templates/Home/Author.vue";
import Bast from "../templates/Home/Bast.vue";
import GetBook from "../templates/Home/GetBook.vue";
import Hdfs from "../templates/Home/Hdfs.vue";
import Hero from "../templates/Home/Hero.vue";
import HeroBottom from "../templates/Home/HeroBottom.vue";
</script>

<template>
  <div class="flex flex-col w-full gap-[70px]">
    <div class="bg-[#1B3764] w-full h-full lg:h-screen pt-[130px] pb-[20px]">
      <div class="contenr">
        <Hero />
      </div>
    </div>
    <div class="flex gap-[40px] flex-col">
      <div class="contenr flex flex-col gap-[50px] md:gap-[139px]">
        <HeroBottom />
        <Author />
        <Bast />
      </div>
      <GetBook />
      <Hdfs />
    </div>
  </div>

  <h1>salom</h1>
</template>
