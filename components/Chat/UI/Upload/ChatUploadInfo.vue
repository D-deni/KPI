<script setup lang="ts">

import {useChat} from "~/stores/chat";

const chat = useChat()
</script>

<template>
   <Transition name="fade">
     <p v-if="chat.showDragInfo" @dragleave.stop="chat.showDragInfo = false" @drop.prevent @dragend.prevent class="bg-black flex bg-opacity-60 z-20 backdrop-blur-sm w-full h-full absolute top-0 bottom-0 right-0 justify-center items-center my-auto text-white tracking-widest">
       {{ $t('Перетащите сюда файлы для отправки') }}
     </p>
   </Transition>

</template>

<style scoped lang="scss">

</style>