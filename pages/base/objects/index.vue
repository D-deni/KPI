<script setup lang="ts">
import TheTextContent from "~/components/UI/TheTextContent.vue";
import ObjectContent from "~/components/Objects/ObjectContent.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
import TheFilter from "~/components/UI/TheFilter.vue";
import ObjectCreate from "~/components/Objects/ObjectCreate.vue";

useSeoMeta({
  title: 'Объекты',
  description: 'Объекты компании'
})
</script>

<template>
  <div>
    <TheTextContent :text-type="'pageTitle'">
      {{ $t('Страница с объектами') }}
    </TheTextContent>
    <div class="flex items-center gap-x-6">
      <TheSearch class="w-8/12"></TheSearch>
      <TheFilter></TheFilter>
      <ObjectCreate class="w-2/12 ml-auto"></ObjectCreate>
    </div>
    <ObjectContent />
  </div>

</template>

<style scoped lang="scss">

</style>