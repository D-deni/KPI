<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import {useChat} from "~/stores/chat";
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "vue-router";
import TheFileInput from "~/components/UI/TheFileInput.vue";
import {Preview} from "vue-advanced-cropper";
import ChatUserCheckbox from "~/components/Chat/UI/ChatUserCheckbox.vue";
import {toast} from "vue3-toastify";

const userCount = ref([])
const groupName = ref<HTMLElement | null>(null)
const groupTitle = ref('')
const titleChecked = false
const chat = useChat()
const router = useRouter()
const currentUser = useAuthStore()
const setFocus = () => {
  nextTick(() => {
    groupName.value?.focus()
  })
}
onMounted(() => {
  groupTitle.value.trim()
})


</script>

<template>
  <div>
    <TheButton class="mb-2 flex items-center gap-x-4 mx-auto" type="treeBtn"
               @click="chat.showGroupCreate = true; setFocus()">
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
      <p class="text-sm">{{ $t('Создать группу') }}</p>
    </TheButton>
    <TheModal @click="setFocus()" v-if="chat.showGroupCreate"
              @showModal="chat.showGroupCreate = false; chat.showGroupCreateChoice = false;  groupTitle = ''; chat.file = ''; chat.src = ''; chat.fileUpload = null; chat.results = {coordinates: null, image: null}"
              :type="'resize'">
      <div @click="setFocus()" class="flex select-none gap-x-6 items-center">
        <div class="relative" @mouseenter="chat.showImageChange = true" @mouseleave="chat.showImageChange = false">
          <Transition name="fade">
            <TheFileInput :toward="'chat'"/>
          </Transition>
          <div v-if="chat.results.image">
            <preview class="w-[80px] h-[80px] rounded-full" :image="chat.results.image"
                     :coordinates="chat.results.coordinates"/>
          </div>
        </div>
        <div>
          <p class="text-sm tracking-wider text-semiCyan transition-all" :class="{'!text-red-400 transition-all' : titleChecked}">{{ $t('Название группы') }}</p>
          <input ref="groupName" v-model="groupTitle" class="border-b-2 bg-transparent border-b-semiCyan !outline-none transition-all"
                 :class="{'border-b-red-400 transition-all' : titleChecked}" @change="titleChecked = false"
                 type="text"/>
        </div>
      </div>
      <div class="flex select-none text-sm justify-end gap-x-4 ">
        <TheButton type="chat"
                   @click="chat.showGroupCreate = false; chat.showGroupCreateChoice = false; chat.isGroup = false; chat.file = ''; chat.src = '';  groupTitle = ''; chat.fileUpload = null; chat.results = {coordinates: null, image: null}">
          {{ $t('Отмена') }}
        </TheButton>
        <TheButton type="chat" @click="()=>{
          if(!groupTitle.length || !groupTitle.trim()) {
           toast.error('Заполните поле', {autoClose: 1500, theme: 'auto'})
           titleChecked = true
          } else {
            chat.showGroupCreate = false
            chat.showGroupCreateChoice = true
          }
        }">
          {{ $t('Далее') }}
        </TheButton>
      </div>
    </TheModal>
    <TheModal :type="'resizeSendWindow'" class="" v-if="chat.showGroupCreateChoice"
              @showModal="chat.showGroupCreateChoice = false; chat.showGroupCreate = false; groupTitle = ''; chat.file = ''; chat.src = ''; chat.fileUpload = null; chat.results = {coordinates: null, image: null}">
      <p class="tracking-wider px-4 pt-4">{{ $t('Добавить участников') }} <span
        class="text-sm text-gray-400 ml-2">{{ userCount.length + '/1000' }}</span></p>
      <div class="w-full px-4 relative flex items-center">
        <div class="absolute rotate-90 ml-2">
          <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <input type="text" class="w-full dark:bg-gray-700 outline-none pl-10 h-[50px]" placeholder="Поиск..."/>
      </div>
      <ChatUserCheckbox v-for="item in chat.get_chat_list.results.filter(e=> !e.is_group)" :item="item"/>
      <div class="w-full px-4 h-[50px] flex items-center justify-end text-sm gap-x-4">
        <TheButton v-if="!chat.showSettingChat" type="chat"
                   @click="chat.showGroupCreateChoice = false; chat.showGroupCreate = true; setFocus()">
          {{ $t('Назад') }}
        </TheButton>
        <TheButton v-else type="chat" @click="chat.showGroupCreateChoice = false;">
          {{ $t('Отмена') }}
        </TheButton>
        <TheButton type="chat" v-if="!chat.showSettingChat"
                   @click="chat.showGroupCreateChoice = false; chat.isGroup = true; chat.createChatUser({users: userCount.filter(e=>e.id).map(e=>e.id), name: groupTitle, photo: chat.fileUpload}).then(res=>{chat.isGroup = false})">
          {{ $t('Создать') }}
        </TheButton>
        <TheButton v-else type="chat"
                   @click="">
          {{ $t('Добавить') }}
        </TheButton>
      </div>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>