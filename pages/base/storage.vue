<script setup lang="ts">
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import {useRoute} from "vue-router";
import {viewSelect} from "~/hooks/ElemUI";
import {QrcodeStream} from "vue-qrcode-reader";
import {useStorageStore} from "~/stores/storage";
import TheModal from "~/components/UI/TheModal.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import type {IScannedBarcode} from "~/types/storage";

const route = useRoute()
const storageStore = useStorageStore()
const scanning = ref('')
const selected = ref(viewSelect[0])
const inWidth = ref()
const scannedBarcode = ref<IScannedBarcode | null>(null)
const onDecode = (value: any) => {
  scannedBarcode.value = value
}

onMounted(() => {
  inWidth.value = window.innerWidth
  storageStore.loadStorageCategoryList()
});

onUpdated(() => {
  if(route.path === `/base/storage`) {
    storageStore.loadAllList()
  }
})

</script>

<template>
  <div class="flex max-[800px]:flex-wrap justify-between max-[800px]:h-full gap-y-10 gap-x-6">
    <div v-if="inWidth <= 800">
    </div>
    <div class="w-4/12 max-lg:w-5/12 max-[800px]:w-full">
      <StorageNav/>
    </div>
    <div class="w-full flex flex-col gap-y-2">
      <TheContentBlock @scroll.prevent @wheel.prevent @touch.prevent>
        <StorageHeader :ref="storageStore.scan" @openStreamSearch="storageStore.streaming = true"/>
        <TheModal type="resize" v-if="storageStore.streaming"
                  @showModal="storageStore.streaming = false; scannedBarcode = null">
          <p>{{ scannedBarcode ? JSON.stringify(scannedBarcode[0].rawValue) : 'not working' }}</p>
          <QrcodeStream @detect="onDecode"
                        :formats="['qr_code', 'aztec', 'code_128', 'code_39', 'code_93', 'databar', 'codabar', 'linear_codes', 'micro_qr_code', 'databar_expanded', 'ean_13', 'ean_8','itf']"/>
        </TheModal>
      </TheContentBlock>
      <TheContentBlock class="w-full">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-x-4 mb-4">
            <TheBreadcrumbs
              :breadcrumb-link="route.path === `/base/storage/${route.params.slug}` || route.path === `/base/storage/${route.params.slug}/${route.params.id}`?`/base/storage`: ''">
              {{ $t('Главная') }}
            </TheBreadcrumbs>
            <div
              v-if="route.path === `/base/storage/${route.params.slug}` || route.path === `/base/storage/${route.params.slug}/${route.params.id}`">
              <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                <path class="dark:stroke-white stroke-black"
                      d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                      stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <TheBreadcrumbs
              v-if="route.path === `/base/storage/${route.params.slug}` || route.path === `/base/storage/${route.params.slug}/${route.params.id}`"
              :breadcrumb-link="route.path === `/base/storage/${route.params.slug}/${route.params.id}`?`/base/storage/${route.params.slug}`: ''">
              {{ storageStore.currentCategory.name }}
            </TheBreadcrumbs>
            <div v-if="route.path === `/base/storage/${route.params.slug}/${route.params.id}`">
              <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                <path class="dark:stroke-white stroke-black"
                      d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                      stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <TheBreadcrumbs v-if="route.path === `/base/storage/${route.params.slug}/${route.params.id}`">
              {{ route.params.id }}
            </TheBreadcrumbs>
          </div>
          <div>
            <USelectMenu v-model="selected" :options="viewSelect">
              <template #label>
                <UIcon :name="selected.icon" class="w-4 h-4">
                </UIcon>
                {{ selected.label }}
              </template>
            </USelectMenu>
          </div>
        </div>
        <div v-if="!route.params.slug" >
          <StorageContent/>
        </div>
        <div v-else>
          <NuxtPage/>
        </div>
      </TheContentBlock>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>