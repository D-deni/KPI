<script setup lang="ts">
import {useChat} from "~/stores/chat";

const chat = useChat()
</script>

<template>
  <Transition name="fade">
    <div v-if="chat.fileSizeInfo" class="absolute top-0 bottom-0 left-0 right-0 z-20 w-full my-auto mx-auto flex justify-center items-center backdrop-blur-sm" @click="chat.fileSizeInfo = false; chat.fileReadInfo = false; chat.file = ''; chat.src = ''">
      <div class="dark:bg-black dark:bg-opacity-70 bg-gray-200 p-4 text-center break-words rounded-lg">
        <p>{{$t('Невозможно отправить пустой файл')}}: <span>{{chat.file.name}}</span></p>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">

</style>