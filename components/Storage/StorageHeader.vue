<script setup lang="ts">
import TheSearch from "~/components/UI/TheSearch.vue";
import ScanAnimation from "~/components/Storage/UI/ScanAnimation.vue";
import {useStorageStore} from "~/stores/storage";
import { handleSearch } from "~/hooks/ElemUI";
import { useRoute } from "vue-router";
const storageStore = useStorageStore()
const modeInput = ref('')
const route = useRoute()
  </script>

<template>
  <div class="flex justify-center gap-x-4 w-full mx-auto items-center">
     <form @submit.prevent class="w-full flex items-center justify-center gap-x-4">
      <TheSearch :mode="modeInput" @focusout="modeInput = ''" @search="storageStore.searchGoods.trim() !== '' && route.path === '/base/storage' ? storageStore.loadAllListSearch({search: storageStore.searchGoods}) : storageStore.loadStorageSubCategory({slug: route.params.slug, search: storageStore.searchGoods})" v-model="storageStore.searchGoods" class="!w-6/12" type="text" ref="scan"/>
      <div class="max-[800px]:hidden">
      <ScanAnimation @onScan="modeInput = 'scan'" :mode="modeInput"/>
    </div>
     </form>
    <button class="max-[800px]:block hidden" @click="$emit('openStreamSearch')">
      <svg class="dark:fill-white fill-black" width="40px" height="40px" viewBox="0 0 24 24" id="qr-code-scan-2"
           data-name="Flat Color" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10,15v2a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1H9A1,1,0,0,1,10,15Zm7-9H15a1,1,0,0,0-1,1V9a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V7A1,1,0,0,0,17,6Zm0,6H13a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V13A1,1,0,0,0,17,12ZM12,7a1,1,0,0,0-1-1H7A1,1,0,0,0,6,7v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1Z"
          style="fill: rgb(44, 169, 188); stroke-width: 1.2;"></path>
        <path
          d="M3,9A1,1,0,0,1,2,8V4A2,2,0,0,1,4,2H8A1,1,0,0,1,8,4H4V8A1,1,0,0,1,3,9ZM22,8V4a2,2,0,0,0-2-2H16a1,1,0,0,0,0,2h4V8a1,1,0,0,0,2,0ZM9,21a1,1,0,0,0-1-1H4V16a1,1,0,0,0-2,0v4a2,2,0,0,0,2,2H8A1,1,0,0,0,9,21Zm13-1V16a1,1,0,0,0-2,0v4H16a1,1,0,0,0,0,2h4A2,2,0,0,0,22,20Z"></path>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>