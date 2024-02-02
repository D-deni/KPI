<script setup lang="ts">
import TheInput from "~/components/UI/TheInput.vue";
import TheFileInput from "~/components/UI/TheFileInput.vue";
import TheButton from "~/components/UI/TheButton.vue";
import {useDocumentStore} from "~/stores/documents";

const documentStore = useDocumentStore()
</script>

<template>
  <div>
    <UITheTitle class="text-center">{{$t('Добавьте новый документ')}}</UITheTitle>
    <form class="flex gap-y-2 flex-col" @submit.prevent="documentStore.docCreate({...documentStore.createForm})">
      <TheInput :type="'text'" :label="'Название'" required v-model="documentStore.createForm.title"></TheInput>
      <TheInput :type="'textarea'" :label="'Описание'" v-model="documentStore.createForm.description"></TheInput>
      <div>
        <TheFileInput></TheFileInput>
      </div>
      <div class="flex justify-center gap-x-10 mt-4">
        <TheButton type="danger" class="px-2 py-1 rounded-lg" @click="documentStore.showCreateDoc = false; documentStore.createForm = {}">{{$t('Отмена')}}</TheButton>
        <TheButton type="success" class="px-2 py-1 rounded-lg" >{{$t('Создать')}}</TheButton>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">

</style>