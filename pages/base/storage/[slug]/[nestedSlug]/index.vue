<script setup lang="ts">
import {useStorageStore} from "~/stores/storage";
import {useRoute} from 'vue-router'
const storageStore = useStorageStore()
const route = useRoute()

onMounted(()=> {
  storageStore.loadItem({itemSlug: route.params.slug})
})
</script>

<template>
  <div>
    Lorem, ipsum.
  </div>
</template>

<style scoped lang="scss">

</style>