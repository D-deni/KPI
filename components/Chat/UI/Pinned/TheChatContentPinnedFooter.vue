<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {toast} from "vue3-toastify";
import TheModal from "~/components/UI/TheModal.vue";
import TheButton from "~/components/UI/TheButton.vue";

const chat = useChat()
defineProps({
  showWarnPinned: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div v-if="chat.showPinnedWindow" @click="showWarnPinned = true"
       class="w-full h-[50px] dark:bg-gray-700 bg-gray-200 border-t border-l border-black dark:border-opacity-20 border-opacity-10 z-10 hover:dark:bg-gray-600 cursor-pointer hover:bg-gray-100">
    <button class="flex mx-auto mt-4 uppercase text-[12px] tracking-widest text-blueSemiLight font-bold">
      {{ $t('Открепить') + ' ' + chat.arrayPin.length + ' ' + $t('сообщения') }}
    </button>
    <TheModal :type="'resize'" v-if="showWarnPinned" @showModal="showWarnPinned = false">
      <div>
        <p class="text-lg  tracking-wider">{{ $t('Открепить все сообщения?') }}</p>
      </div>
      <div class="flex mt-4 gap-x-4 justify-center">
        <TheButton type="chat" @click="showWarnPinned = false">
          {{ $t('Отмена') }}
        </TheButton>
        <TheButton type="chat"
                   @click="chat.makePinned({messages: chat.arrayPin.filter(e=>e.id).map(e=>e.id)}).then(res=> toast.info('Сообщения откреплены', {autoClose: 1500, theme: 'auto'})); showWarnPinned = false; chat.showPinnedWindow = false">
          {{ $t('Открепить') }}
        </TheButton>
      </div>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>