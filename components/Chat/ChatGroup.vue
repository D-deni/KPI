<script setup lang="ts">

import ChatGroupCreate from "~/components/Chat/ChatGroup/ChatGroupCreate.vue";
import TheButton from "~/components/UI/TheButton.vue";
import {useChat} from "~/stores/chat";

const chat = useChat()
</script>

<template>
  <div>
    <ChatGroupCreate/>
  </div>
</template>

<style scoped lang="scss">

</style>