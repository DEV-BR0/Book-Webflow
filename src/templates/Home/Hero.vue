<template>
  <div class="lg:flex-row flex flex-col-reverse gap-[20px] ">
    <div class="flex grow flex-col gap-[40px]">
      <div class="flex items-center gap-[5px]">
        <div class="bg-amber-300 h-[1px] w-[50px]"></div>
        <p class="font-[inner] text-white">Welcome to Pages</p>
      </div>
      <div class="flex flex-col gap-[30px]">
        <h1 class="text-white lg:text-[80px] md:text-[40px] sm:text-[30px] text-[27px] font-[innes]">
          Books are uniquely portable magic
        </h1>
        <p className="text-white lg:text-[18px] text-[15px] line-clamp-3 max-w-md">
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
          class="bg-[#ffffff00] text-white pt-[7px] pb-[7px] pl-[10px] pr-[10px] font-[inner] hover:rounded-2xl transition-all duration-200 underline underline-offset-[8px] pt-[14px] pb-[14px] pl-[20px] pr-[20px]"
        >
          Read Free Demo
        </button>
      </div>
      <div class="flex gap-[20px] flex-wrap">
        <div class="flex gap-[20px] grow text-white  ">
          <div class="w-[16px] h-[16px] bg-[#FFCA42] rounded-[50%] mt-[8px]"></div>
          <div class="flex flex-col gap-[10px]">
            <p class="font-[innes] text-[21px]">Length:</p>
            <p>10 Hours</p>
          </div>
        </div>
        <div class="flex gap-[20px] text-white  grow">
          <div class="w-[16px] h-[16px] bg-[#FFCA42] rounded-[50%] mt-[8px]"></div>
          <div class="flex flex-col gap-[10px]">
            <p class="font-[innes] text-[21px]">Ratings:</p>
            <p>4.5/5 (305 ratings)</p>
          </div>
        </div>
        <div class="flex gap-[20px] text-white  grow">
          <div class="w-[16px] h-[16px] bg-[#FFCA42] rounded-[50%] mt-[8px]"></div>
          <div class="flex flex-col gap-[10px]">
            <p class="font-[innes] text-[21px]">Pages:</p>
            <p>586pages</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex grow">
      <img src="/images/Book.png" alt="photo" class="flex lg:grow w-[300px] lg:w-auto" />
    </div>
  </div>
</template>
