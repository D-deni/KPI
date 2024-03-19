<script setup lang="ts">
import {useTips, tipsStorage} from "~/stores/tips";
import DocumentTip from "~/components/UI/Tips/DocumentTip.vue";
import CloudTip from "~/components/UI/Tips/CloudTip.vue";
import {useRoute, useRouter} from "vue-router";
import nuxtStorage from "nuxt-storage/nuxt-storage";

const tipsStore = useTips()
const route = useRoute()
const router = useRouter()

const toggleCloudTip = () => {
  tipsStore.setCloudTip(!tipsStore.cloudTip)
}

watchSyncEffect(() => {
  if (route.path === `/base/documents/${route.params.id}` && tipsStorage ? tipsStorage.documentTip : tipsStore.documentTip) {
    tipsStore.showTips = true
  } else {
    tipsStore.showTips = false
  }
})
</script>

<template>
  <div v-if="tipsStorage ? tipsStorage.allTips && tipsStore.showTips : tipsStore.allTips && tipsStore.showTips">
    <DocumentTip  v-if="tipsStorage ? tipsStorage.documentTip : tipsStore.documentTip"></DocumentTip>
    <CloudTip></CloudTip>
  </div>
</template>

<style scoped lang="scss">

</style>