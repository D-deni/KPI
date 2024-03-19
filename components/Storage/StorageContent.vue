<script setup lang="ts">
import StorageCard from "~/components/Storage/UI/StorageCard.vue";
import {useStorageStore} from "~/stores/storage";

const storageStore = useStorageStore()
</script>

<template>
    <div class="flex gap-4 flex-wrap">
      <StorageCard class="flex gap-2 flex-col max-[800px]:justify-center" v-for="item in storageStore.storageHomeAllList" :from="true" :item="item"></StorageCard>
    </div>
</template>

<style scoped lang="scss">

</style>