<script setup lang="ts">
import { useStorageStore } from "~/stores/storage";
const storageStore = useStorageStore();
</script>

<template>
  <div>
    <div>
      <slot name="ContextMenuSvg" />
    </div>
    <p class="text-[15px] font-mono">
      <slot name="ContextMenuText" />
    </p>
  </div>
</template>

<style scoped></style>
