<script setup lang="ts">
import {useUserStore} from "~/stores/users";
import {useAuthStore} from "~/stores/auth";
import DocumentItemInfoChainScheduleItem
  from "~/components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainScheduleItem.vue";
import {LinkedList} from "~/hooks/Node";
import {useDocumentStore} from "~/stores/documents";
const authStore = useAuthStore()
const documentStore = useDocumentStore()
</script>

<template>
  <div class="h-full " @click="documentStore.showContext = null">
    <div class="h-[500px] grid overflow-auto border grid-cols-1">
      <DocumentItemInfoChainScheduleItem/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>