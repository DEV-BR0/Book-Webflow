<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="fixed top-0 left-0 w-full bg-[#1B3764] shadow-lg z-50">
    <div class="contenr mx-auto flex justify-between items-center p-1">
      <div class="flex gap-[10px] p-[20px] items-center">
        <Icon color="#FFCA42" icon="lucide:bookmark" width="24" />
        <p class="font-bold text-white text-[25px]">Book WebFlow</p>
        <div class="flex gap-[10px]">
          <div class="p-[10px] w-[40px] bg-white flex justify-center items-center">
            <Icon icon="fa-brands:facebook-f" width="18" color="#1B3764" />
          </div>
          <div  class="p-[10px] w-[40px] bg-white flex justify-center items-center">
            <Icon icon="fa-brands:twitter" width="18" color="#1B3764" />
          </div>
          <div class="p-[10px] w-[40px] bg-white flex justify-center items-center">
            <Icon icon="fa-brands:linkedin-in" width="18"  color="#1B3764"/>
          </div>
        </div>
      </div>
      <div class="flex gap-[20px] text-white">
        <RouterLink to="/"> Home </RouterLink>
      </div>
    </div>
  </div>
</template>
