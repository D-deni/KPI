<script setup lang="ts">
import TheTextContent from "~/components/UI/TheTextContent.vue";
import {useNotification} from "~/stores/notification";

const notification = useNotification()
</script>

<template>
  <div>
    <div @click="this.$emit('openNotification')">
      <svg width="25px" height="25px" class="fill-gray-400 dark:fill-white ml-auto" viewBox="-2 0 32 32" version="1.1"
           xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
          <g id="Icon-Set" transform="translate(-466.000000, -931.000000)">
            <path
              d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z"
              id="arrow-top"></path>
          </g>
        </g>
      </svg>
    </div>
    <TheTextContent>{{ $t('Уведомления') }}</TheTextContent>
    <div
      class="my-2 flex flex-col gap-y-4 h-full max-md:h-full max-[800px]:max-h-[90%] max-h-[400px] overflow-y-scroll pr-2">
      <div v-for="(notice, i) in notification.get_notification" :key="i"
           @click="notification.readNotice({id: notice.id})"
           class="p-2 border relative dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer transition-all duration-200 rounded-lg dark:border-gray-500"
           :class="{'dark:bg-gray-700 bg-gray-300' : notice.read === true}">
        <div v-if="notice.read" class="absolute bottom-1 left-2 text-[11px]">
          <svg class="fill-semiCyan" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"/>
            <path v-if="notice.read === true" fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"/>
          </svg>
        </div>
        <div class="flex justify-between gap-x-4 dark:text-white text-black">
          <div class="w-full">
            <p class=" text-center">{{ notice.text }}</p>
          </div>
          <div class="border-r"></div>
          <div class="text-end text-[12px]">
            <p>{{ new Date(notice.created_at).toLocaleDateString() }}</p>
            <p>{{ new Date(notice.created_at).toLocaleTimeString().slice(0, 5) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>