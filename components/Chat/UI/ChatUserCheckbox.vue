<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const user = useAuthStore()

defineProps({
  item: {
    type: Object,
    default: ()=>{}
  }
})
</script>

<template>
    <label v-if="!item.is_group && item.user.department" class="flex w-full items-center gap-x-4 relative py-2 px-6 text-black transition-all  cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-200">
      <div class="relative max-w-[50px] max-h-[50px]">
        <img class="rounded-full w-full dark:border-0 border" :src="user.get_server_domain + item.user.photo" :class="{'!p-[2px] transition-all !border' : item.value}" alt="">
        <Transition name="fade">
          <div v-if="item.value" class="absolute top-0 rounded-full w-[50px] h-[50px]" :class="{'!border-2 !border-semiCyan text-white transition-all' : item.value === true, 'dark:border-none' : item.value === false}"></div>
        </Transition>
        <Transition name="bounce">
          <div v-if="item.value" class="absolute bottom-0 right-0">
            <svg class="bg-semiCyan rounded-full stroke-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L10 16L17 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </Transition>
      </div>
      <span class="relative z-10 dark:text-white">{{ item?.user?.first_name + ' ' + item?.user?.last_name }}</span>
      <input
        type="checkbox"
        class="hidden"
        @change="item.value = !item.value"
        :checked="item.value"
      >
      <span class=" w-full h-full absolute top-0 left-0 "></span>
    </label>
</template>

<style scoped lang="scss">

</style>