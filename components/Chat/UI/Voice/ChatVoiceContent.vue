<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {clearTimer} from "~/hooks/ElemUI";
import useRecorder from "~/hooks/Recordings";
const chat = useChat()
const threshold = 500
const isLongClick = ref(false)
const recorder = useRecorder()
const startClick = () => {
  chat.voiceTimer = 0

  increaseTime()
  recorder.createWaveSurfer()
  recorder.recButton()
}
const increaseTime = () => {

  chat.clickerTimeout = setTimeout(() => {
    chat.recordingVoice = true
    chat.voiceTimer++
    increaseTime()
  }, 200)
}
const endClick = () => {
  clearTimer(chat.recordingVoice = false, chat.clickerTimeout)
  isLongClick.value = chat.voiceTimer >= threshold / 1000
  if (!isLongClick.value) {
    setTimeout(() => {
      chat.showVoiceInfo = true
    }, 0)
    setTimeout(() => {
      chat.showVoiceInfo = false
    }, 3000)
  }
}

</script>

<template>
  <div>
    <div class="absolute right-2 bottom-0.5 transition-all " id="mic"
         :class="{'rounded-full pt-1 px-1 bg-blueSemiLight' : chat.recordingVoice}" @mousedown="startClick"
         @mouseup="endClick">
      <button>
        <svg class="fill-gray-500 dark:hover:fill-gray-300 hover:fill-gray-700 transition-all"
             :class="{'fill-white hover:!fill-white' : chat.recordingVoice}" width="35px" height="35px"
             viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 4.5C10.314 4.5 9 5.80455 9 7.35V12.15C9 13.6955 10.314 15 12 15C13.686 15 15 13.6955 15 12.15L15 7.35C15 5.80455 13.686 4.5 12 4.5ZM7.5 7.35C7.5 4.919 9.54387 3 12 3C14.4561 3 16.5 4.919 16.5 7.35L16.5 12.15C16.5 14.581 14.4561 16.5 12 16.5C9.54387 16.5 7.5 14.581 7.5 12.15V7.35ZM6.75 12.75C6.75 15.1443 9.0033 17.25 12 17.25C14.9967 17.25 17.25 15.1443 17.25 12.75H18.75C18.75 15.9176 16.0499 18.3847 12.75 18.7129V21H11.25V18.7129C7.95007 18.3847 5.25 15.9176 5.25 12.75H6.75Z"/>
        </svg>
      </button>
    </div>
    <audio ref="audioPlayer"></audio>
  </div>

</template>

<style scoped lang="scss">
#mic > .wrapper {
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
}
</style>