<template>
  <div>
    <NuxtLink :to="to"
              class="flex transition-all hover:bg-cyan dark:hover:bg-semiCyan dark:hover:border-r-cyan hover:border-r-4 hover:border-r-semiCyan p-4 w-full rounded-l-lg items-center gap-x-6 dark:text-white text-black"
              :class="{'rounded-l-none pl-[22px]' : !activeNav}"
    >
      <div class="dark:fill-white fill-black">
        <slot name="navIcon"/>
      </div>
      <div :class="{'hidden' : !activeNav}">
        <slot name="navLink"/>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
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