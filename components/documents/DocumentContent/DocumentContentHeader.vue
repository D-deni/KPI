<script setup lang="ts">
import TheModal from "~/components/UI/TheModal.vue";
import DocumentContentHeaderCreate from "~/components/documents/DocumentContent/DocumentContentHeaderCreate.vue";

import {useDocumentStore} from "~/stores/documents";

const document = useDocumentStore()
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center gap-x-10">
      <button class="tracking-widest">{{ $t('Мои документы') }}</button>
      <button class="tracking-widest">{{ $t('Ожидающие подтверждения') }}</button>
    </div>
    <button @click="document.showCreateDoc = true"
        class="px-2 py-1 rounded-lg flex items-center gap-x-2 border dark:border-gray-500 dark:hover:border-gray-400 hover:border-gray-400 transition-all">
      <svg class="dark:stroke-white stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 11V14M12 14V17M12 14H9H15H12ZM13.0714 2.52927V6.83334C13.0714 7.93791 13.9668 8.83334 15.0714 8.83334H19.3494M13.0714 2.52927C12.7307 2.5095 12.3738 2.5 12 2.5C6.26471 2.5 4.5 4.73529 4.5 12C4.5 19.2647 6.26471 21.5 12 21.5C17.7353 21.5 19.5 19.2647 19.5 12C19.5 10.8146 19.453 9.76307 19.3494 8.83334M13.0714 2.52927L19.3494 8.83334"
            stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="tracking-widest font-bold text-black dark:text-white">{{ $t('Добавить') }}</span>
    </button>
    <TheModal :type="'resize'" v-if="document.showCreateDoc" @showModal="document.showCreateDoc = false">
      <DocumentContentHeaderCreate/>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>