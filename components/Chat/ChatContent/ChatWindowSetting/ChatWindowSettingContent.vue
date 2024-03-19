<script setup lang="ts">
import ChatWindowSettingContentHeader
  from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentHeader.vue";
import ChatWindowSettingContentMain
  from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentMain.vue";
import ChatWindowSettingContentUserList
  from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentUserList.vue";
import {useChat} from "~/stores/chat";
import ChatUserCheckbox from "~/components/Chat/UI/ChatUserCheckbox.vue";
import TheButton from "~/components/UI/TheButton.vue";
import ChatWindowSettingContentHeaderChange
  from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentHeaderUI/ChatWindowSettingContentHeaderChange.vue";

const chat = useChat()

const showGroupAdd = ref(false)
const groupTitle = ref('')
const userCount = []
</script>

<template>
  <div @click="chat.showSettingChat = false" >
    <ChatWindowSettingContentHeader @showGroupAdd="showGroupAdd = true"/>
    <ChatWindowSettingContentMain/>
    <ChatWindowSettingContentUserList/>
    <Transition name="fade">
      <ChatWindowSettingContentHeaderChange></ChatWindowSettingContentHeaderChange>
    </Transition>
    <Transition name="fade" >
      <div class="absolute z-30 w-full h-full top-0 left-0 flex items-center" v-if="showGroupAdd">
        <div class="absolute bg-black left-0 top-0 w-full h-full bg-opacity-50" @click="showGroupAdd = false"/>
        <div class="bg-gray-700  w-10/12 mx-auto h-max rounded-lg relative">
          <p class="tracking-wider px-4 pt-4">{{ $t('Добавить участников') }}
          <span class="text-sm text-gray-400 ml-2">{{ userCount.length + '/1000' }}</span></p>
          <div class="w-full px-4 flex overflow-y-auto max-h-[300px] items-center">
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
          <div class=" max-h-[300px] overflow-y-auto">
            <ChatUserCheckbox v-for="item in chat.get_chat_list.results.filter(e=> !e.is_group)" :item="item"/>
          </div>
          <div class="w-full px-4 h-[50px] flex items-center justify-end text-sm gap-x-4">
            <TheButton type="chat" @click="showGroupAdd = false;">
              {{ $t('Отмена') }}
            </TheButton>
            <TheButton type="chat"
                       @click="">
              {{ $t('Добавить') }}
            </TheButton>
          </div>
        </div>
      </div>
    </Transition>
  </div>

</template>

<style scoped lang="scss">

</style>