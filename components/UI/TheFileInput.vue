<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {uploadImage} from "~/hooks/ElemUI";
import {uploadFile} from "~/hooks/ElemUI";
import {useDocumentStore} from "~/stores/documents";

defineProps({
  title: String,
  modelValue: String,
  toward: String
})

const chat = useChat()
const documentStore = useDocumentStore()
// const createImage = (event: any)=>{
//   chat.file = event
//   if(event.type === 'image/svg+xml' || event.type === 'image/jpeg+jpg' || event.type === 'image/png'){
//     chat.file_image = URL.createObjectURL(event);
//   } else {
//     chat.file_image = '/file-image.svg'
//   }
//   console.log(event)
// }

</script>

<template>
  <label v-if="!chat.file" for="uploadInput">
    <div v-if="toward === 'chat'"
         class="p-4 rounded-full hover:bg-semiCyan bg-blueSemiLight transition-all duration-200 cursor-pointer">
      <svg class="fill-white" width="40px" height="40px" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18ZM12 16.0071C10.3392 16.0071 8.9929 14.6608 8.9929 13C8.9929 11.3392 10.3392 9.9929 12 9.9929C13.6608 9.9929 15.0071 11.3392 15.0071 13C15.0071 14.6608 13.6608 16.0071 12 16.0071Z"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.56155 2C8.18495 2 6.985 2.93689 6.65112 4.27239L6.21922 6H4C2.34315 6 1 7.34315 1 9V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V9C23 7.34315 21.6569 6 20 6H17.7808L17.3489 4.27239C17.015 2.93689 15.8151 2 14.4384 2H9.56155ZM8.59141 4.75746C8.7027 4.3123 9.10268 4 9.56155 4H14.4384C14.8973 4 15.2973 4.3123 15.4086 4.75746L15.8405 6.48507C16.0631 7.37541 16.863 8 17.7808 8H20C20.5523 8 21 8.44772 21 9V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V9C3 8.44772 3.44772 8 4 8H6.21922C7.13696 8 7.93692 7.37541 8.15951 6.48507L8.59141 4.75746Z"/>
      </svg>
    </div>
    <div v-else class="w-full cursor-pointer h-full border mx-auto p-2 rounded-lg">
      <div v-if="!documentStore.createForm.src">
        <div class="flex justify-center mt-10">
          <svg class="fill-blueSemiLight" height="70px" width="70px" version="1.1" id="Layer_1"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve">
          <g>
            <g>
              <g>
                <path d="M21.333,21.333h213.333v96c0,5.867,4.8,10.667,10.667,10.667h96v74.667h21.333v-85.333c0-1.067-0.32-2.133-0.64-3.2
                  c-0.107-0.32-0.107-0.533-0.213-0.853c-0.533-1.387-1.387-2.56-2.453-3.627L252.907,3.093C250.88,1.173,248.213,0,245.333,0
                  H10.667C4.8,0,0,4.8,0,10.667v448c0,5.867,4.8,10.667,10.667,10.667H224V448H21.333V21.333z M256,36.48l70.187,70.187H256V36.48z
                  "/>
                <path d="M373.333,234.667c-76.587,0-138.667,62.08-138.667,138.667S296.747,512,373.333,512S512,449.92,512,373.333
                  C511.893,296.747,449.92,234.773,373.333,234.667z M373.333,490.667C308.48,490.667,256,438.187,256,373.333
                  S308.48,256,373.333,256s117.333,52.48,117.333,117.333C490.56,438.08,438.08,490.56,373.333,490.667z"/>
                <path d="M412.8,377.173l-28.8,28.8v-90.56c0-5.333-3.84-10.133-9.067-10.88c-6.613-0.96-12.267,4.16-12.267,10.56v90.667
                  l-28.587-28.587c-4.16-4.16-10.987-4.16-15.253,0c-4.16,4.16-4.16,10.987,0,15.253l46.933,46.933c4.16,4.16,10.987,4.16,15.253,0
                  l46.933-46.933c4.16-4.267,4.053-11.093-0.213-15.253C423.573,373.12,416.96,373.12,412.8,377.173z"/>
              </g>
            </g>
          </g>
        </svg>
        </div>
        <div class="text-center mt-10">
          <p class="text-sm text-gray-400 tracking-widest">{{ $t('Перетащите сюда файл или нажмите и выберите') }}</p>
        </div>
      </div>
      <div v-else class="flex justify-around items-center text-center">
        <div>
          <div v-if="documentStore.createForm.file.type?.slice(0 - 3) === 'pdf'">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="60px" height="60px" viewBox="0 0 56 64" enable-background="new 0 0 56 64"
                 xml:space="preserve">
                        <g>
                          <path fill="#8C181A"
                                d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>
                          <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>
                          <path opacity="0.5" fill="#FFFFFF" enable-background="new"
                                d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>
                        </g>
              <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                          c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                           M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                          h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                          s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                          C42.2,42.8,41.9,43.1,41.5,43.1z"/>
            </svg>
          </div>
          <div v-else-if="documentStore.createForm.file.name.substr(-3) === 'doc' || documentStore.createForm.file.name.substr(-4) === 'docx'">
            <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <g fill-rule="evenodd">
                <path
                    d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z"
                    fill="#107cad"/>
                <path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968"/>
                <path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#90d0fe" opacity=".5"/>
              </g>
              <path
                  d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z"
                  fill="#ffffff"/>
            </svg>
          </div>
        </div>
        <div>
          <p>{{documentStore.createForm.file.name}}</p>
          <p>{{documentStore.createForm.file.size}}</p>
        </div>
        <div>
          <svg class="dark:stroke-white stroke-black" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5001 6H3.5" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M9.5 11L10 16" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M14.5 11L14 16" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke-width="1.2"/>
            <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"  stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>
    <input
        :accept="toward === 'chat' ? '.webp, .png, .jpeg, .jpg' : '.pdf, .doc, .docx, .xls'"
        id="uploadInput"
        :value="modelValue"
        :v-model="modelValue"
        @change="toward === 'chat' ? uploadImage($event.target.files[0], chat) : uploadFile($event.target.files[0], documentStore.createForm); chat.showChatCropper = true"
        @input="$emit('update:modelValue', $event.target.value)"
        class="hidden"
        type="file"
    >
  </label>
  <label v-else-if="chat.file && chat.showImageChange" for="updateFile"
         class="bg-black mx-auto flex justify-center items-center w-full h-full absolute z-20 rounded-full bg-opacity-40 cursor-pointer">
    <div>
      <svg width="30px" height="30px" viewBox="0 -2 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g class="fill-white" id="Icon-Set-Filled" transform="translate(-258.000000, -467.000000)">
            <path
                d="M286,471 L283,471 L282,469 C281.411,467.837 281.104,467 280,467 L268,467 C266.896,467 266.53,467.954 266,469 L265,471 L262,471 C259.791,471 258,472.791 258,475 L258,491 C258,493.209 259.791,495 262,495 L286,495 C288.209,495 290,493.209 290,491 L290,475 C290,472.791 288.209,471 286,471 Z M274,491 C269.582,491 266,487.418 266,483 C266,478.582 269.582,475 274,475 C278.418,475 282,478.582 282,483 C282,487.418 278.418,491 274,491 Z M274,477 C270.687,477 268,479.687 268,483 C268,486.313 270.687,489 274,489 C277.313,489 280,486.313 280,483 C280,479.687 277.313,477 274,477 L274,477 Z"
                id="camera"/>
          </g>
        </g>
      </svg>
    </div>
    <input
        id="updateFile"
        @change="uploadImage($event.target.files[0], chat); chat.showChatCropper = true"
        @input="$emit('update:modelValue', $event.target.value)"
        class="hidden"
        type="file"
        accept=".webp, .png, .jpeg, .jpg"
    />
  </label>
</template>

<style scoped lang="scss">

</style>