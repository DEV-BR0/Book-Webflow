<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const count = ref(0);
</script>

<template>
  <HelloWorld />
  <h1>{{ count }}</h1>
  <button @click="count++">+</button>
</template>
