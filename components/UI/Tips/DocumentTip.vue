<script setup lang="ts">
import {tipsStorage, useTips} from "~/stores/tips";

const tipsStore = useTips()

defineProps({
  storage: {
    type: Object,
    default: ()=>{}
  }
})
</script>

<template>
  <div class="w-full h-full fixed bg-black top-0 z-[1000] bg-opacity-30 left-0" >
    <button>Hiden DocumentTip</button>
  </div>
</template>

<style scoped lang="scss">

</style>