<script setup lang="ts">
import {useChat} from "~/stores/chat";

const chat = useChat()
</script>

<template>
  <div
    class="my-auto dark:bg-gray-700 dark:shadow-gray-600 shadow-md rounded-lg dark:border-none border-t border-opacity-20 border-gray-400 mt-20 h-20 items-center flex justify-center w-4/12 max-lg:w-6/12 max-md:w-10/12 max-ms:w-full mx-auto"
    v-if="chat.userChat.messages.length === 0">
    <p class="tracking-widest text-lg max-sm:text-base">{{ $t('Пока что тут ничего нет') }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>