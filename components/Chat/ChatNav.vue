<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useUserStore} from "~/stores/users";
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";
import {useAuthStore} from "~/stores/auth";
import TheSceleton from "~/components/UI/TheSceleton.vue";
import ChatNavHeader from "~/components/Chat/ChatNav/ChatNavHeader.vue";
import ChatNavContent from "~/components/Chat/ChatNav/ChatNavContent.vue";
defineProps({
  activeNav: {
    type:Boolean,
    default: true
  }
})
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const chatStore = useChat()
const user = useAuthStore()
onMounted(()=>{
  chatStore.windowWidth = window.innerWidth
})
</script>

<template>
  <div class="h-full" >
    <ChatNavHeader class="pt-6"/>
    <ChatNavContent class="" @dragenter="chatStore.showDragInfo = false"></ChatNavContent>
  </div>
</template>

<style scoped lang="scss">
*{
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>