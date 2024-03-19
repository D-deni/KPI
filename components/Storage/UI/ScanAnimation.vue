<script setup lang="ts">
defineProps({
  mode: String
})
</script>

<template>
    <UTooltip class="text-lg tracking-wider" :text="$t('Отсканируйте код')" :popper="{arrow: true}">
      <button type="button" class="relative border dark:border-gray-400 rounded-lg p-1 transition-all" :class="{'dark:border-gray-200 border-gray-400' : mode === 'scan'}" @click="$emit('onScan')" >
        <svg class="" width="30px" height="30px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(1.000000, 2.000000)" class="dark:fill-gray-400 fill-gray-400" :class="{'dark:!fill-gray-200 fill-gray-500' : mode === 'scan'}">
              <rect x="13" y="0" width="1.953" height="10.914" class="si-glyph-fill"/>
              <rect x="10" y="0" width="1.967" height="10.914" class="si-glyph-fill"/>
              <rect x="8" y="0" width="0.95" height="10.914" class="si-glyph-fill"/>
              <rect x="4" y="0" width="1.972" height="10.914" class="si-glyph-fill"/>
              <rect x="2" y="0" width="0.973" height="10.914" class="si-glyph-fill"/>
              <rect x="0" y="0" width="0.973" height="10.914" class="si-glyph-fill"/>
            </g>
          </g>
        </svg>
        <div class=" w-[39px] h-[1.2px] rounded-full shadow shadow-cyan dark:shadow-semiCyan dark:bg-semiCyan bg-blueSemiLight absolute top-4 left-0" :class="{'laser' : mode === 'scan'}"></div>
      </button>
    </UTooltip>
</template>

<style scoped lang="postcss">
  .laser {
    animation: scanning 1.5s infinite alternate;
    transition: .2s all ease;
  }
@keyframes scanning {
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>