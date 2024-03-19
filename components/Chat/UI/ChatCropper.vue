<script setup lang="ts">
import {Cropper, CircleStencil} from "vue-advanced-cropper";
import 'vue-advanced-cropper/dist/theme.bubble.css';
import 'vue-advanced-cropper/dist/style.css';

import {useChat} from "~/stores/chat";
import TheButton from "~/components/UI/TheButton.vue";

const chat = useChat()
let fd = new FormData()

function onChangeImage({coordinates, image}) {
  chat.results = {
    coordinates: coordinates,
    image: image,
  }
}

</script>

<template>
  <div>
    <div class="fixed top-0 left-0 right-0 bottom-0 backdrop-blur z-[1000]" v-if="chat.src && chat.showChatCropper === true">
      <div class="p-20 w-full h-full max-md:w-screen max-md:h-screen max-md:p-0">
        <cropper ref="cropper" class="w-screen h-screen" :src="chat.src"
                 backgroundClass="!bg-transparent"
                 foregroundClass="bg-black rounded-lg"
                 @change="onChangeImage"
                 :stencil-component="CircleStencil"
                 :stencil-props="{
              previewClass: 'border-dashed border w-full h-full',
             }">
        </cropper>
      </div>
      <div class="absolute bottom-2 left-0 right-0 flex justify-center">
        <div class="bg-gray-800 bg-opacity-40 p-4 flex gap-x-10 text-sm rounded-lg">
          <TheButton
            @click="chat.showChatCropper = false; chat.file = ''; chat.src = ''; chat.results = {image: null, coordinates: null, file: null}">
            {{ $t('Отмена') }}
          </TheButton>
          <TheButton>
            <svg class="fill-gray-300 hover:fill-white transition-all" width="30px" height="30px" viewBox="0 0 56 56"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 7.7265 25.1056 C 8.2656 24.8477 8.5000 24.4493 8.4765 23.7930 C 8.4062 22.9493 7.4452 21.7774 7.4452 18.6603 C 7.4452 13.6446 10.6796 10.1290 15.7421 10.1290 L 15.8124 10.1290 L 15.8124 13.3399 C 15.8124 15.1915 17.2656 15.6134 18.6718 14.5587 L 25.0702 9.8946 C 26.1484 9.1212 26.1484 8.2071 25.0702 7.4103 L 18.6718 2.7227 C 17.2421 1.6444 15.8124 2.0665 15.8124 3.9649 L 15.8124 7.4103 L 15.7187 7.4103 C 8.9921 7.4103 4.5156 11.9337 4.5156 18.6368 C 4.5156 21.1446 5.0312 23.2071 5.7578 24.4493 C 6.1562 25.1290 7.0000 25.4571 7.7265 25.1056 Z M 45.4609 54.3556 C 49.4689 54.3556 51.4844 52.4337 51.4844 48.3321 L 51.4844 25.1524 C 51.4844 21.0508 49.4689 19.1290 45.4609 19.1290 L 22.2343 19.1290 C 18.2265 19.1290 16.2109 21.0508 16.2109 25.1524 L 16.2109 48.3321 C 16.2109 52.4337 18.2265 54.3556 22.2343 54.3556 Z M 45.3905 50.5821 L 22.3046 50.5821 C 20.6874 50.5821 19.9843 49.9259 19.9843 48.2618 L 19.9843 25.2227 C 19.9843 23.5587 20.6874 22.9024 22.3046 22.9024 L 45.3905 22.9024 C 47.0080 22.9024 47.7107 23.5587 47.7107 25.2227 L 47.7107 48.2618 C 47.7107 49.9259 47.0080 50.5821 45.3905 50.5821 Z"/>
            </svg>
          </TheButton>
          <TheButton class="!text-semiCyan" @click="()=>{
          const {canvas} = this.$refs.cropper.getResult()
          if(canvas) {
            canvas?.toBlob(blob => {
                chat.fileUpload = blob;
                fd.append('file', blob)
            })
          }
          console.log(canvas)
          chat.showChatCropper = false;
        }">
            {{ $t('Установить фотография') }}
          </TheButton>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>