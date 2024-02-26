<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useAuthStore} from "~/stores/auth";
import {uploadImage} from "~/hooks/ElemUI";
import {useRoute} from "vue-router";
import {Preview} from "vue-advanced-cropper";
import ChatCropper from "~/components/Chat/UI/ChatCropper.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheInput from "~/components/UI/TheInput.vue";
import ChatCropperFileInput from "~/components/Chat/UI/ChatCropperFileInput.vue";
import {toast} from "vue3-toastify";
import ChatFileError from "~/components/Chat/UI/ChatFileError.vue";

const chat = useChat()
const route = useRoute()
const loadAuthStore = useAuthStore()

</script>

<template>
  <div v-if='chat.showChatChangeInfo' class="absolute z-30 w-full h-full top-0 left-0 ">
    <div class="bg-black w-full h-full absolute left-0 top-0 opacity-50"
         @click="chat.showChatChangeInfo = false; chat.file = ''; chat.src = ''; chat.fileUpload = null; chat.results = {image: null, coordinates: null}"></div>
    <div class="absolute dark:bg-gray-700 bg-gray-200 rounded-lg bottom-0 top-0 h-max left-0 right-0 w-10/12 mx-auto my-auto">
      <div class="p-4">
        <div class="pb-2">
          <p class="text-lg">{{ $t('Настройки группы') }}</p>
        </div>
        <div class="flex items-center gap-x-6 select-none">
          <div class="relative" @mouseenter="chat.showImageChange = true" @mouseleave="chat.showImageChange = false">
            <Transition name="fade">
              <ChatCropperFileInput/>
            </Transition>
            <div class="w-[80px] h-[80px] max-sm:w-[70px] max-sm:h-[70px]" v-if="!chat.src && !chat.results.image">
              <img v-if="chat.get_user_chat.user?.id || chat.get_user_chat.photo_url"
                   class="w-full rounded-full"
                   :src="!chat.get_user_chat.is_group
              ? loadAuthStore.get_server_domain + chat.get_user_chat.user?.photo
              : loadAuthStore.get_server_domain + chat.get_user_chat?.photo_url"
                   alt="">
              <div v-else>
                <div class="w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full bg-blueSemiLight">
                  <p class="uppercase" v-for="chatName in chat.get_user_chat.name.split(' ').slice(0,2)"
                     @click="console.log(chatName[0])">{{ chatName[0] }}</p>
                </div>
              </div>
            </div>
            <div v-else-if="chat.results.image">
              <preview class="w-[80px] h-[80px] rounded-full" :image="chat.results.image"
                       :coordinates="chat.results.coordinates"/>
            </div>
            <div v-else-if="chat.src && !chat.results.image">
              <img class="w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full"
                   :src="chat.src"/>
            </div>
          </div>
          <div>
            <div>
              <p class="text-sm tracking-wider text-semiCyan">{{ $t('Название группы') }}</p>
              <TheInput :type="'default'" v-model="chat.updateChatName"
                        class="bg-transparent bg-opacity-0 border-b-2 border-b-semiCyan outline-none" type="text"/>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div class="flex justify-end gap-x-2 p-4 !text-sm">
        <TheButton :type="'chat'"
                   @click="chat.showChatChangeInfo = false; chat.file = ''; chat.src = ''; chat.fileUpload = null;chat.results = {image: null, coordinates: null}; chat.updateChatName = chat.userChat.name">
          {{ $t('Отмена') }}
        </TheButton>
        <TheButton :type="'chat'"
                   @click="chat.updateChatName !== chat.userChat.name || chat.updateDescription !== chat.userChat.description || chat.fileUpload ? chat.chatUpdate({id: route.params.id, update: {name: chat.updateChatName , description: '', photo: chat.fileUpload}}).then(res=>{chat.showChatChangeInfo = false; chat.fileUpload = null; chat.userChat.name = chat.updateChatName; chat.updateChatName = ''}) : toast.info($t('Измените содержимое для сохранения'), {autoClose: 1500, theme: 'auto'})">
          {{ $t('Сохранить') }}
        </TheButton>
      </div>
      <ChatFileError/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>