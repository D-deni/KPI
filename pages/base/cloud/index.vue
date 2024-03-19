<script setup lang="ts">
import CloudContent from "~/components/Cloud/CloudContent.vue";

useSeoMeta({
  title: 'Файл менеджер',
  description: 'Файловый менеджер для хранения или взаимодействия с файлами'
})
</script>

<template>

  <div class="h-screen">
    <CloudContent/>
  </div>
</template>

<style scoped lang="scss">

</style>