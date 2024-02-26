<script setup lang="ts">
import ChatContentContextMenuItem from "~/components/Chat/ChatContent/ChatContentContextMenuItem.vue";
import {useChat} from "~/stores/chat";
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "vue-router";

const router = useRouter()

const {x, y} = useMouse()
const {y: windowY} = useWindowScroll()
const isOpen = ref(false)
const userContent = ref()
const virtualElement = ref({getBoundingClientRect: () => ({})})
const chat = useChat()
const loadAuthStore = useAuthStore()
</script>

<template>
  <div>
    <div
      class="border-t cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-300 transition-all duration-200 flex gap-x-2 border-black border-opacity-20 px-4 py-3">
      <div>
        <svg class="fill-gray-600 dark:fill-gray-300" height="20px" width="20px" version="1.1" id="Layer_1"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.863 459.863" xml:space="preserve"><g><g><g><path d="M395.988,193.977c-18.629,24.992-45.641,41.956-77.406,44.25c26.626,31.04,43.84,70.378,47.152,113.55
                c1.243,16.197,0.369,24.083-0.932,30.599c16.064-2.497,30.815-6.128,43.488-10.794c42.626-15.694,51.573-38.891,51.573-55.586
                C459.863,265.521,434.565,220.849,395.988,193.977z"></path><path d="M276.72,199.407c10.642,5.952,22.36,9.093,34.525,9.093c45.83,0,81.115-44.3,81.115-96.677
                c0-52.382-35.29-96.677-81.115-96.677c-18.734,0-36.411,7.436-50.724,21.145c20.03,25.65,31.446,59.072,31.446,94.667
                C291.967,154.544,286.961,178.037,276.72,199.407z"></path><path d="M259.999,226.279c-24.558,31.058-57.739,46.482-91.839,46.482c-36.232,0-68.69-17.206-91.839-46.482
                C30.403,256.333,0,308.217,0,367.076c0,18.127,9.926,43.389,57.213,60.8c29.496,10.861,68.898,16.841,110.947,16.841
                c42.049,0,81.451-5.98,110.947-16.841c47.287-17.411,57.213-42.673,57.213-60.8C336.32,308.217,305.918,256.333,259.999,226.279z
                "></path><path d="M168.16,242.763c53.003,0,93.806-51.234,93.806-111.804c0-60.571-40.808-111.804-93.806-111.804
                c-52.995,0-93.806,51.223-93.806,111.804C74.354,191.541,115.169,242.763,168.16,242.763z"></path></g></g></g></svg>
      </div>
      <p class="uppercase text-[12px] tracking-wider ml-4">{{ chat.get_user_chat.users.length + ' ' }}<span>{{ $t('участников') }}</span></p>
    </div>
    <div class="dark:bg-gray-800 bg-gray-200 flex flex-col gap-y-3 py-4 h-[300px] overflow-y-auto">
      <div v-for="item in chat.get_user_chat.users"
           @contextmenu.prevent="()=> {
                              const top = unref(y) - unref(windowY)
                              const left = unref(x)
                              virtualElement.getBoundingClientRect = () => ({
                                width: 0,
                                height: 0,
                                top,
                                left
                              })
                              isOpen = true
                              userContent = {...item}
                            }"
           class="flex bg-transparent border-none gap-x-4 items-center w-full dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer transition-all px-5">
        <div>
          <img v-if="item?.id || item.is_group" class="w-[45px] h-[45px] rounded-full"
               :src="loadAuthStore.get_server_domain + item?.photo"
               alt="">
          <div v-else class="rounded-full bg-blueSemiLight flex items-center justify-center w-[45px] h-[45px]">
            <svg class="stroke-white" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="w-9/12 break-words">
          <p class="text-[12px] tracking-widest">
            {{ item?.id && !item.is_group ? item?.first_name + ' ' + item?.last_name : item.name }}</p>
        </div>
      </div>
      <UContextMenu @contextmenu.prevent v-model="isOpen" :virtual-element="virtualElement">
<!--        <ChatContentContextMenuItem-->
<!--          @click="router.push(`/base/chat/${userContent?.id}`); isOpen = false">-->
<!--          <template v-slot:ContextMenuSvg>-->
<!--            <svg class="dark:stroke-white stroke-black" width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <circle opacity="0.5" cx="12" cy="9" r="3" stroke-width="1.2"/>-->
<!--              <circle cx="12" cy="12" r="10" stroke-width="1"/>-->
<!--              <path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke-width="1.2" stroke-linecap="round"/>-->
<!--            </svg>-->
<!--          </template>-->
<!--          <template v-slot:ContextMenuText>{{ $t('Перейти в чат') }}</template>-->
<!--        </ChatContentContextMenuItem>-->
        <ChatContentContextMenuItem @click="chat">
          <template v-slot:ContextMenuSvg>
            <svg class="dark:stroke-white stroke-black" width="23px" height="23px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path data-v-a06cf116="" d="M10 12V17" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
              <path data-v-a06cf116="" d="M14 12V17" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
              <path data-v-a06cf116="" d="M4 7H20" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
              <path data-v-a06cf116="" d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path data-v-a06cf116="" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </template>
          <template v-slot:ContextMenuText>{{ $t('Удалить') }}</template>
        </ChatContentContextMenuItem>
      </UContextMenu>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>