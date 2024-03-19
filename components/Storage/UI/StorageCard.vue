<script setup lang="ts">
import {useStorageStore} from "~/stores/storage";
import {useRoute} from "vue-router";
import {useAuthStore} from "~/stores/auth";

const storageStore = useStorageStore()
const authStore = useAuthStore()
const route = useRoute()
defineProps({
  item: {
    type: Object,
    default: ()=>{}
  },
  from: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <NuxtLink :to=" from ? route.path + `/${item.slug}/${item.slug}` : route.path + `/${item.slug}`" class="hover:bg-blueSemiLight hover:text-white transition-all h-max duration-200 p-2 rounded-xl w-[200px] ">
    <div class="border-none p-2 rounded-xl">
      <img :src="authStore.get_server_domain + item.photo" class="rounded-xl max-h-[160px] h-full mx-auto border dark:border-none" alt="">
    </div>
    <div class="flex  text-center justify-center items-center ">
      <p class=" tracking-wider break-words mt-4">{{ item.name }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">

</style>