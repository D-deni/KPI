<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useRoute} from "vue-router";
import {toast} from "vue3-toastify";
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";

const route = useRoute()
const chat = useChat()
const activePin = ref({})
const props = defineProps({
  arrayPin: {
    type: Array,
    default: ()=>[]
  },
  showWarnPinned: {
    type: Boolean,
    default: false
  }
})

watchSyncEffect(()=>{
  chat.arrayPin = chat.get_pinned_list
  activePin.value = chat.arrayPin[0]
})

</script>

<template>
 <Transition name="slide-down">
   <div v-if="chat.arrayPin.length" class="w-full h-[60px] dark:bg-gray-700 bg-gray-200 border-t border-l border-black dark:border-opacity-20 border-opacity-10 z-10">
      <div class="flex items-center p-3 gap-x-2">
        <div class="w-[2px] h-[40px] bg-semiCyan">
        </div>
        <div class="text-sm w-full">
          <p class="dark:text-semiCyan text-blueSemiLight tracking-wide">{{$t('Закреплённое сообщение')}}</p>
          <p>{{ activePin?.text.length > 30
            ? activePin.text?.slice(0,30) + '...'
            : activePin?.text}}
          </p>
        </div>
        <div>
          <button v-if="chat.arrayPin.length < 2" @click="showWarnPinned = true">
            <svg class="fill-gray-500" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-inspector="components/Chat/ChatContent.vue:55:17"><path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" data-v-inspector="components/Chat/ChatContent.vue:57:19"></path></svg>
          </button>
          <button v-else @click="chat.showPinnedWindow = !chat.showPinnedWindow">
            <svg class="stroke-gray-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6318 8.22382L13.2654 7.85744C11.7353 6.32736 10.9703 5.56232 10.1409 5.56299C9.86995 5.56321 9.60189 5.61847 9.35297 5.72542C8.59095 6.05283 8.19087 7.05807 7.39072 9.06855L7.33281 9.21406C7.10596 9.78403 6.99254 10.069 6.8104 10.2989C6.67221 10.4733 6.50589 10.6235 6.31829 10.7431C6.071 10.9009 5.77593 10.9846 5.18578 11.1521C4.27067 11.4118 3.81311 11.5417 3.61005 11.8186C3.45915 12.0244 3.39264 12.2802 3.42416 12.5334C3.46657 12.8742 3.80289 13.2105 4.47554 13.8832L7.60603 17.0137C8.27867 17.6863 8.61499 18.0226 8.95577 18.065C9.20903 18.0966 9.46475 18.03 9.67057 17.8791C9.94751 17.6761 10.0774 17.2185 10.3371 16.3034C10.5046 15.7133 10.5883 15.4182 10.7461 15.1709C10.8657 14.9833 11.0159 14.817 11.1903 14.6788C11.4202 14.4967 11.7052 14.3832 12.2751 14.1564L12.4206 14.0985C14.4311 13.2983 15.4364 12.8982 15.7638 12.1362C15.8707 11.8873 15.926 11.6192 15.9262 11.3483C15.9269 10.5189 15.1618 9.7539 13.6318 8.22382Z" stroke-width="1.5"/>
              <path d="M3.34679 18.142L6.04053 15.4482" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 8H17" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 12.5H18" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 17H13" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
     <TheModal :type="'resize'" v-if="showWarnPinned" @showModal="showWarnPinned = false">
       <div>
         <p class="text-lg tracking-wider">{{ $t('Открепить это сообщение?') }}</p>
       </div>
       <div class="flex mt-4 gap-x-4 justify-center">
         <TheButton type="chat" @click="showWarnPinned = false">
           {{ $t('Отмена') }}
         </TheButton>
         <TheButton type="chat"
                    @click="chat.makePinned({messages: [activePin.id]}).then(res=>{
                       toast.info('Сообщение откреплено', {autoClose: 1500, theme: 'auto'})
                     }); showWarnPinned = false">
           {{ $t('Открепить') }}
         </TheButton>
       </div>
     </TheModal>
   </div>
 </Transition>
</template>

<style scoped lang="scss">

</style>