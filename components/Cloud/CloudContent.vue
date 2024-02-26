<script setup lang="ts">
import TheCloudUIFolders from "~/components/Cloud/CloudUI/TheCloudUIFolders.vue";
import TheCloudUiStructure from "~/components/Cloud/CloudUI/CloudUIStructure/TheCloudUiStructure.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import {useCloudStore} from "~/stores/cloud";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";

defineProps({
  activeStructure: {
    type: Boolean,
    default: false,
  }
})

</script>

<template>
  <div class="flex w-full gap-x-10 h-full relative">
    <div class="absolute top-0 right-0 w-full bg-black bg-opacity-40 rounded-lg z-[22] hidden max-[840px]:block"
         :class="{'!hidden' : !activeStructure}" @click="activeStructure = false"/>
    <div
      class="flex flex-col h-full max-[840px]:absolute max-[840px]:z-40 max-[840px]:dark:bg-gray-600 max-[840px]:bg-white gap-y-10 !z-[23]"
      :class="{'max-[425px]:w-full' : activeStructure}">
      <TheCloudUiStructure :active-structure="activeStructure"
                           @activeStructures="activeStructure = !activeStructure"/>
      <div @click="activeStructure = !activeStructure" class="hidden"
           :class="{'max-[840px]:!block' : !activeStructure}">
        <div class="cursor-pointer absolute top-8 max-[840px]:top-6 left-5 !z-0 dark:fill-white fill-black">
          <svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.999776 1.99957H20.9998C21.5177 1.99957 21.9845 1.46089 21.9845 0.9431C21.9845 0.425798 21.5607 0.00261796 21.0428 0.00261796H0.956408C0.43868 0.00261796 0.014912 0.425798 0.014912 0.9431C0.014912 1.46089 0.482048 1.99957 0.999776 1.99957ZM0.999776 8.99956H20.9998C21.5177 8.99956 21.9845 8.51664 21.9845 7.99933C21.9845 7.48203 21.5177 6.99958 20.9998 6.99958H0.999776C0.482048 6.99958 0.014912 7.48203 0.014912 7.99933C0.014912 8.51664 0.482048 8.99956 0.999776 8.99956ZM21.0428 15.9962H0.956408C0.43868 15.9962 0.014912 15.5727 0.014912 15.0551C0.014912 14.5379 0.482048 13.9997 0.999776 13.9997H20.9998C21.5177 13.9997 21.9845 14.5379 21.9845 15.0551C21.9845 15.5727 21.5607 15.9962 21.0428 15.9962Z"></path>
          </svg>
        </div>
      </div>
    </div>
    <TheContentBlock class="w-full overflow-x-hidden relative p-10 max-[500px]:p-2 rounded-lg  z-20" >
      <TheTextContent>
        {{ $t('Структура файлов') }}
      </TheTextContent>
      <TheCloudUIFolders class="z-10"/>
    </TheContentBlock>
    <UContextMenu >
      <div class="">
        <div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
          <div>
            <svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px"
                 viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
              <path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
              <path data-v-965c8b16=""
                    d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z"
                    stroke-width="2"></path>
            </svg>
          </div>
          <p>{{ $t('Создать папку') }}</p>
        </div>
        <div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
          <div>
            <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p>{{ $t('Убрать в корзину') }}</p>
        </div>
      </div>
    </UContextMenu>
  </div>
</template>

<style  lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>