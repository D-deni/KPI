<script setup lang="ts">

import {useChat} from "~/stores/chat";

const chat = useChat()
</script>

<template>
  <div>
    <Transition name="fade">
      <div v-if="chat.showDragInfo" class="bg-black bg-opacity-40 w-screen h-screen absolute">

      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

</style>