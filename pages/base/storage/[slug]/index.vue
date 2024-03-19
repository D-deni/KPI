<script setup lang="ts">
import {useStorageStore} from "~/stores/storage";
import {useRoute} from "vue-router";
import StorageCard from "~/components/Storage/UI/StorageCard.vue";
const storageStore = useStorageStore()
const route = useRoute()
const router = useRouter()
const props = defineProps({
  item: {
    type: Object,
    default: () => {
    }
  }
})

onMounted(() => {
 storageStore.loadStorageSubCategory({slug: route.params.slug})
  if(!storageStore.currentCategory) {
    router.push('/base/storage')
  }
})



</script>

<template>
  <div>
    <div class="flex gap-4 flex-wrap ">
      <StorageCard class="flex flex-col gap-2 max-[800px]:justify-center " v-for="item in storageStore.currentCategory.items" :from="false" :item="item" :key="item.id"/>
    </div>
    <div>
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>