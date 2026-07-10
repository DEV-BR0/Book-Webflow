<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="app flex flex-col gap-[20px]">
    <Navbar />
    <RouterView />
  </div>
</template>
