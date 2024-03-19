<template>
  <div>
    <NuxtLink :to="to" @click="authUser.openSettings = false; authUser.openNotification = false;"
              class="flex pl-6 transition-all hover:bg-cyan dark:hover:bg-semiCyan dark:hover:border-r-cyan hover:border-r-4 hover:border-r-semiCyan py-2 w-full items-center gap-x-3 dark:text-white text-black px-4"
              :class="{'rounded-l-none justify-center ' : !authUser.activeNav}"
    >
      <div class="dark:fill-white fill-black transition-all">
        <slot name="navIcon"/>
      </div>
      <div class="tracking-wider text-sm max-sm:text-base" v-if="authUser.activeNav">
        <slot name="navLink"/>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const authUser = useAuthStore()
const props = defineProps({
  to: String,
  activeNav: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
a.nuxt-link-active {
  color: blue;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>