<script setup lang="ts">
import ObjectList from "~/components/Objects/ObjectList.vue";
import {useObjects} from "~/stores/objects";
import TheTextContent from "~/components/UI/TheTextContent.vue";
const objects = useObjects()
objects.loadObjectList()
</script>

<template>
  <div class="flex gap-x-10">

    <div class="w-full flex flex-col gap-y-4">
      <ObjectList v-for="object in objects.get_objects.results" :object="object" />
    </div>
    <div class="dark:border-t dark:border-t-gray-500 border-t border-t-gray-100 dark:shadow-gray-500 shadow-md w-4/12 rounded-lg p-2">
      <TheTextContent>{{$t('Информация по объектам')}}</TheTextContent>
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>