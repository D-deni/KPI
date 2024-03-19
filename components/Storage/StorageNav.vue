<script setup lang="ts">
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import StorageNavElem from "~/components/Storage/StorageNav/StorageNavElem.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
import {useStorageStore} from "~/stores/storage";
import TheModal from "~/components/UI/TheModal.vue";
import StorageCreateCategory from "~/components/Storage/UI/StorageCreateCategory.vue";
import { handleSearch } from "~/hooks/ElemUI";
const router = useRouter()
const storageStore = useStorageStore()
</script>

<template>
  <div>
    <TheContentBlock class="!p-0 h-screen max-[800px]:h-full ">
      <div class="flex px-10 py-4 gap-x-4 items-center justify-between">
        <TheSearch v-model="storageStore.searchCategory" class="w-11/12" @search="handleSearch(storageStore.searchCategory, storageStore.searchCategory.trim() !== '' ? storageStore.loadStorageCategorySearch({query: storageStore.searchCategory}) : storageStore.loadStorageCategoryList())"/>
        <button @click="storageStore.createCategory = true">
          <svg class="dark:stroke-white stroke-black dark:hover:stroke-green-300 hover:stroke-green-500 transition-all" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 18C23 18.75 22.79 19.46 22.42 20.06C22.21 20.42 21.94 20.74 21.63 21C20.93 21.63 20.01 22 19 22C17.78 22 16.69 21.45 15.97 20.59C15.95 20.56 15.92 20.54 15.9 20.51C15.78 20.37 15.67 20.22 15.58 20.06C15.21 19.46 15 18.75 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C20 14 20.9 14.36 21.6 14.97C21.72 15.06 21.83 15.17 21.93 15.28C22.59 16 23 16.95 23 18Z"
               stroke-width="1" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
            <path d="M20.49 17.98H17.51"  stroke-width="1" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 16.52V19.51"  stroke-width="1" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M3.17004 7.43994L12 12.5499L20.7701 7.46991"  stroke-width="1"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 21.6099V12.5399"  stroke-width="1" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path
              d="M21.61 9.17V14.83C21.61 14.88 21.61 14.92 21.6 14.97C20.9 14.36 20 14 19 14C18.06 14 17.19 14.33 16.5 14.88C15.58 15.61 15 16.74 15 18C15 18.75 15.21 19.46 15.58 20.06C15.67 20.22 15.78 20.37 15.9 20.51L14.07 21.52C12.93 22.16 11.07 22.16 9.93001 21.52L4.59001 18.56C3.38001 17.89 2.39001 16.21 2.39001 14.83V9.17C2.39001 7.79 3.38001 6.11002 4.59001 5.44002L9.93001 2.48C11.07 1.84 12.93 1.84 14.07 2.48L19.41 5.44002C20.62 6.11002 21.61 7.79 21.61 9.17Z"
               stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="max-[800px]:max-h-[400px] overflow-auto">
        <StorageNavElem class="mt-2 border-b pb-4 mx-4 dark:border-[#666D76] max-[800px]:last:border-none" v-for="item in storageStore.storageCategoryList" :isActive="storageStore.isActive"
                        :item="item"/>
      </div>
    </TheContentBlock>
   <Transition name="slide-down">
     <TheModal type="resize" v-if="storageStore.createCategory" @showModal="storageStore.createCategory = false">
        <StorageCreateCategory/>
     </TheModal>
   </Transition>
  </div>
</template>

<style scoped lang="scss">

</style>