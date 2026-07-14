<script setup>
import { onMounted, ref } from "vue";
import { apiCleant } from "../../composables/onAxios";
const data = ref(null);
onMounted(async () => {
  try {
    const res = await apiCleant.get("/data/data.json");
    data.value = res.data.Books;
  } catch (error) {
    console.log(error.message);
  }
});
</script>
<template>
  <div
    data-aos="fade-up"
    class="flex  flex-col items-center w-full md:mt-[75px] mt-[30px]"
  >
    <h1
      class="text-[#1B3764] font-[innes] text-[23px] md:text-[46px] font-bold"
    >
      Author’s Book Includes
    </h1>
    <div class="flex w-full justify-between gap-[10px] lg:gap-[60px]">
      <div
        v-for="book in data"
        :key="book.id"
        class="flex w-full justify-between"
      >
        <img :src="book.image" :alt="book.title" class="w-[300px] lg:w-auto" />
        <div class="flex grow lg:flex-row flex-col">
          <div class="flex flex-col gap-[20px] hidden md:flex">
            <p class="text-[#1B3764] md:text-[32px] text-[19px] font-bold">
              {{ book.title }}
            </p>
            <p
              class="line-clamp-3 text-[#969AA0] md:text-[19px] text-[15px] max-w-[300px]"
            >
              {{ book.description }}
            </p>
            <div class="flex">
              <div class="flex md:gap-[20px] gap-[7px] grow text-[#1B3764]">
                <div
                  class="md:w-[16px] md:h-[16px] w-[7px] h-[7px] bg-[#FFCA42] rounded-[50%] mt-[8px]"
                ></div>
                <div class="flex flex-col gap-[10px]">
                  <p class="font-[innes] md:text-[21px] text-[14px]">Pages:</p>
                  <p>{{ book.pages }}</p>
                </div>
              </div>
              <div class="flex md:gap-[20px] gap-[7px] grow text-[#1B3764]">
                <div
                  class="md:w-[16px] md:h-[16px] w-[7px] h-[7px] bg-[#FFCA42] rounded-[50%] mt-[8px]"
                ></div>
                <div class="flex flex-col gap-[10px]">
                  <p class="font-[innes] md:text-[21px] text-[14px]">Length:</p>
                  <p>{{ book.length }}</p>
                </div>
              </div>
            </div>
            <button
              class="border-[#FFCA42] border border-1 text-[#1B3764] hover:text-white hover:bg-[#1B3764] md:pt-[14px] md:pb-[14px] md:pl-[20px] md:pr-[20px] p-[10px] font-[inner] hover:rounded-2xl transition-all duration-200"
            >
              Order Today
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
