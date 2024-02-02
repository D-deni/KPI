<template>
  <div class="flex flex-col">
    <TheTextContent :text-type="'pageTitle'">
      {{$t('Страница профиля')}}
    </TheTextContent>
    <div class="w-full mx-auto">
      <ProfileContent :activeNav="activeNav"></ProfileContent>
    </div>
  </div>
</template>
<script setup lang="ts">
import TheTextContent from "~/components/UI/TheTextContent.vue";
const props = defineProps({
  activeNav: {
    type: Boolean,
    default: false
  }
})

useSeoMeta({
  title: 'Профиль',
  description: 'Личный кабинет | Текущая информация обо мне'
})
</script>