<template>
  <div class="flex gap-[20px]">
    <div class="flex grow flex-col gap-[40px]">
      <div class="flex items-center gap-[5px]">
        <div class="bg-amber-300 h-[1px] w-[50px]"></div>
        <p class="font-[inner] text-white">Welcome to Pages</p>
      </div>
      <div class="flex flex-col gap-[30px]">
        <h1 class="text-white text-[80px] font-[innes]">
          Books are uniquely portable magic
        </h1>
        <p className="text-white text-[18px] line-clamp-3 max-w-md">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div class="flex gap-[10px] items-center">
        <button
          class="bg-[#FFCA42] text-[#1B3764] pt-[14px] pb-[14px] pl-[20px] pr-[20px] font-[inner] hover:rounded-2xl transition-all duration-200"
        >
          Order Today
        </button>
        <button
          class="bg-[#ffffff00] text-white pt-[7px] pb-[7px] pl-[10px] pr-[10px] font-[inner] hover:rounded-2xl transition-all duration-200 underline underline-offset-[8px]"
        >
          Read Free Demo
        </button>
      </div>
    </div>
    <div class="flex grow ">
      <img src="./../images/Book.png" alt="photo" class="flex grow" />
    </div>
  </div>
</template>
