<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="app flex flex-col gap-[20px]">
    <Navbar />
    <main class="pt-[60px] md:pt-[83px]">
      <RouterView />
    </main>
  </div>
</template>
