<script setup>
import { Icon } from "@iconify/vue";
import { Menu, ShoppingCart } from "@lucide/vue";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
onMounted(() => {
  document.title = "Book WebFlow | Home";
});
</script>
<template>
  <div class="fixed top-0 left-0 w-full bg-[#1B3764] shadow-lg z-50">
    <div class="contenr mx-auto flex justify-between items-center p-[10px]">
      <div class="flex gap-[10px] p-[8px] items-center ">
        <Icon color="#FFCA42" icon="lucide:bookmark" width="24" />
        <p class="font-bold text-white text-[18px] sm:text-[27px]">Book WebFlow</p>
        <div class="flex gap-[10px] hidden sm:flex">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="p-[10px] w-[40px] bg-white hover:text-white flex text-[#1B3764] justify-center items-center hover:bg-blue-500 transition duration-200"
          >
            <Icon icon="fa-brands:facebook-f" width="18" />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            class="p-[10px] w-[40px] bg-white hover:text-white flex text-[#1B3764] justify-center items-center hover:bg-blue-500 transition duration-200"
          >
            <Icon icon="fa-brands:twitter" width="18" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="p-[10px] w-[40px] bg-white hover:text-white flex text-[#1B3764] justify-center items-center hover:bg-blue-500 transition duration-200"
          >
            <Icon icon="fa-brands:linkedin-in" width="18" />
          </a>
        </div>
      </div>
      <div class="flex gap-[20px] text-white items-center hidden lg:flex">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/service">Services</RouterLink>
        <RouterLink to="/about">Contact</RouterLink>
        <button>
          <ShoppingCart />
        </button>
        <button
          class="bg-[#FFCA42] text-[#1B3764] pt-[7px] pb-[7px] pl-[10px] pr-[10px] font-[inner] hover:rounded-2xl transition-all duration-200"
        >
          Order Today
        </button>
      </div>
      <div class="p-[10px] text-white block lg:hidden">
        <Menu />
      </div>
    </div>
  </div>
</template>
