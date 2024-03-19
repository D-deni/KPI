<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
const params = ref({
  query: ''
})
defineProps({
  showFilter: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <form @submit.prevent class="flex items-center gap-x-10 my-10">
      <TheButton
        @click="showFilter = !showFilter"
        class="tracking-widest rounded-full dark:bg-gray-400 p-3 bg-gray-300 hover:bg-gray-400 transition-all duration-200">
        {{ $t('Фильтр') }}
      </TheButton>
    </form>
  </div>
</template>

<style scoped lang="scss">

</style>