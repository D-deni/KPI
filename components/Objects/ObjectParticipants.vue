<script setup lang="ts">
import {useObjects} from "~/stores/objects";
import {useAuthStore} from "~/stores/auth";
const url = useAuthStore()
const currentObject = useObjects()
defineProps({
  user: {
    type: Object,
    default: ()=>{}
  }
})
</script>

<template>
  <div>
    <NuxtLink class="flex dark:hover:bg-gray-700 p-2 rounded-lg transition-all items-center gap-x-2" :to="`/base/users/${user.id}`">
      <div class="w-[50px] h-[50px]">
        <img class="w-full rounded-full" :src="url.get_server_domain + user.photo_url" alt="">
      </div>
      <p>
        {{user.first_name + ' ' + user.last_name}}
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

</style>