<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useRoute} from "vue-router";
import TheModal from "~/components/UI/TheModal.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheInput from "~/components/UI/TheInput.vue";


const route = useRoute()
const chat = useChat()
</script>

<template>
  <Transition name="fade">
    <div v-if="chat.showUploadWindow && chat.file.size > 0" class="fixed left-0 top-0 h-screen w-screen flex justify-center items-center z-[110] backdrop-blur-sm" @scroll.prevent @wheel.prevent>
      <div class="opacity-60 bg-black absolute left-0 top-0 w-screen h-screen backdrop-blur" @click="chat.showUploadWindow = false; chat.file = ''; chat.src = ''"></div>
      <div class="!w-max dark:!bg-gray-700  bg-white rounded-lg relative p-5 max-sm:p-3 overflow-y-auto">
        <p v-if="!chat.messageUpdate.file" class="tracking-widest">{{ $t('Отправить как файл') }}</p>
        <div class="flex gap-x-12  mt-6">
          <div class="flex gap-x-4">
            <div class="bg-blueSemiLight rounded-full p-3">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22Z"
                        fill="#1C274C"/>
                </g>
                <path
                  d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z"
                  fill="#1C274C"/>
              </svg>
            </div>
            <div class="break-words">
              <p>{{ chat.file.name?.length > 25 ? chat.file.name.slice(0,20) + '...' + chat.file.name.substr(-5): chat.file.name}}</p>
              <p class="text-gray-500 font-bold text-sm">{{ chat.file.size < 1000 ? chat.file.size + ' ' + $t('Б') : chat.file.size + ' ' + $t('КБ') }}</p>
            </div>
          </div>
          <div>
            <svg class="stroke-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
        </div>
        <div class="my-2">
          <p class="text-sm tracking-wider text-semiCyan">{{ $t('Подпись') }}</p>
          <TheInput v-if="!chat.messageUpdate.file" :type="'default'" v-model="chat.signature"
                    class="bg-transparent bg-opacity-0 border-b-2 border-b-semiCyan outline-none" type="text"/>
          <TheInput v-else :type="'default'" v-model="chat.messageUpdate.updateText"
                    class="bg-transparent bg-opacity-0 border-b-2 border-b-semiCyan outline-none" type="text"/>
        </div>
        <div class="flex justify-end text-sm">
          <TheButton :type="'chat'" @click="chat.showUploadWindow = false; chat.file = ''; chat.src = ''; chat.signature = ''">
            {{$t('Отмена')}}
          </TheButton>
          <TheButton v-if="!chat.messageUpdate.file" :type="'chat'" @click="chat.createMessage({id: route.params.id ,file: chat.file, text: chat.signature}).then(res=>{chat.showUploadWindow = false; chat.file = ''; chat.src = ''; chat.signature = ''})">
            {{$t('Отправить')}}
          </TheButton>
          <TheButton v-else :type="'chat'" @click="chat.updateMessage({id: chat.messageUpdate.id, text: chat.messageUpdate.updateText}).then(res=>{chat.showUploadWindow = false; chat.file = ''; chat.src = ''; chat.signature = ''})">
            {{$t('Сохранить')}}
          </TheButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">

</style>