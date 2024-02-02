<script setup lang="ts">

import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import DocumentItemInfoChainSchedule
  from "~/components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainSchedule.vue";
import {useDocumentStore} from "~/stores/documents";
import {useRoute, useRouter} from 'vue-router'
import DocumentItemInfoChainFile
  from "~/components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainFile.vue";
import {LinkedList} from "~/hooks/Node";
import {useAuthStore} from "~/stores/auth";

const route = useRoute()
const router = useRouter()
const documentStore = useDocumentStore()
const authStore = useAuthStore()
</script>

<template>
  <div class="overflow-x-hidden ">
    <TheTextContent class="my-4">{{ $t('Выстраивание цепочки для подписания документа') }}</TheTextContent>
    <div class="">
      <DocumentItemInfoChainSchedule :item="documentStore.documentItem"/>
    </div>
    <div class=" justify-center gap-x-10 border-b border-l border-r p-4 rounded-b-xl rounded-t-sm ">
      <div class="flex gap-x-6 justify-center items-center">
        <DocumentItemInfoChainFile :item="documentStore.documentItem"></DocumentItemInfoChainFile>
      </div>
      <div class="flex justify-center gap-x-10 mt-4">
        <TheButton :type="'documentBtn'" @click="documentStore.showWarn = true">{{ $t('Удалить документ') }}</TheButton>
        <TheButton :type="'documentBtn'"
                   @click="documentStore.docUpdate({users: documentStore.userList.map(innerArray => innerArray.filter(item=> item.id !== authStore.user.id).map(item => item.id)).filter(innerArray => innerArray.length > 0), id: route.params.id}).then(res=>documentStore.loadDocument({id: route.params.id}))">
          {{ $t('Запустить цепь') }}
        </TheButton>
      </div>
    </div>
    <div class="my-6">
      <p class="text-center tracking-widest text-lg">{{$t('Описание:')}}</p>
      <p>{{documentStore.documentItem.description}}</p>
    </div>
    <TheModal :type="'resize'" v-if="documentStore.showWarn" @showModal="documentStore.showWarn = false">
      <TheTextContent>{{ $t('Удалить данный документ?') }}</TheTextContent>
      <p class="text-sm tracking-widest text-gray-300 my-6 ">
        {{ $t('Содержимое данного документа пропадёт и черновик не будет сохранён') }}</p>
      <div class="flex justify-center gap-x-10 ">
        <TheButton :type="'chat'" @click="documentStore.showWarn = false">
          {{ $t('Отмена') }}
        </TheButton>
        <TheButton :type="'chat'"
                   @click="documentStore.docDelete({id: route.params.id}).then(res=> {router.push('/base/documents'); documentStore.showWarn = false})">
          {{ $t('Удалить') }}
        </TheButton>
      </div>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>