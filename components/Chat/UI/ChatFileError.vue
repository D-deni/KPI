<script setup lang="ts">

import {useChat} from "~/stores/chat";

const chat = useChat()
</script>

<template>
  <Transition name="fade">
    <div class="cursor-pointer" v-if="chat.fileChecked" @click="chat.fileChecked = false">
      <div class="bg-black w-full h-full absolute top-0 left-0 bg-opacity-40 rounded-lg" />
      <div class="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center backdrop-blur-[2px]">
        <p class="dark:bg-gray-700 bg-gray-200 px-4 py-2 rounded-lg tracking-widest">{{$t('Неизвестный формат файла')}}</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">

</style>