<script setup lang="ts">

import {useAuthStore} from "~/stores/auth";

defineProps(['item'])


const authStore = useAuthStore()
</script>

<template>
    <div v-if="item.self" class="transition-all ">
      <div class="flex items-center gap-x-6">
        <TransitionGroup name="list" tag="list" class="flex flex-col gap-y-6 transition-all">
          <div
            class="h-24 border border-gray-500 dark:border-white w-[220px] px-2 rounded-lg text-center flex items-center justify-center mx-auto relative "
            v-for="(user, userIndex) in item.self" :key="userIndex">
            <div class="flex gap-x-4 items-center">
              <div class="max-w-[50px]">
                <img class="w-full rounded-full" :src="authStore.get_server_domain + user.photo" alt="">
              </div>
              <p class="text-[15px] w-full">
                {{ user.first_name + ' ' + user.last_name }}
              </p>
            </div>
          </div>
        </TransitionGroup>
        <DocumentItemInfoChainContentElems :item="item.parent"/>
      </div>
    </div>
</template>

<style scoped lang="scss">

</style>