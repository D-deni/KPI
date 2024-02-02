<template>
  <div class="w-full grid gap-y-10 gap-x-10 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"
       :class="{'max-[1150px]:grid-cols-2' : activeNav, 'max-[1150px]:grid-cols-3' : !activeNav}">
    <ProfileContentUserInfo :get-code/>
    <div
      class="w-full p-6 dark:border-t  dark:border-t-gray-500 dark:shadow-md shadow-lg dark:shadow-gray-500 cursor-pointer rounded-md hover:transform hover:-translate-y-2 transition-all duration-200">
      <h2 class="dark:text-white tracking-widest">{{ $t('Личная статистика') }}</h2>
      <ProfileContentChart/>
    </div>
    <TheContentBlock
      class="">
      <TheTextContent>
        {{ $t('Последние задания') }}
      </TheTextContent>
      <div>
        <ProfileTasks></ProfileTasks>
      </div>
    </TheContentBlock>
    <TheContentBlock
      class="">
      <TheTextContent>
        {{ $t('Уведомления') }}
      </TheTextContent>
      <ProfileContentNotification></ProfileContentNotification>
    </TheContentBlock>
    <TheContentBlock
      class="">
      <TheTextContent>
        {{ $t('') }}
      </TheTextContent>
    </TheContentBlock>
  </div>
</template>

<script setup lang="ts">
import ProfileContentChart from "~/components/Profile/ProfileUI/ProfileContentChart.vue";
import ProfileContentUserInfo from "~/components/Profile/ProfileUI/ProfileContentUserInfo.vue";
import ProfileContentNotification from "~/components/Profile/ProfileUI/ProfileContentNotification.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import ProfileTasks from "~/components/Profile/ProfileUI/ProfileTasks.vue"

import {useMediaQuery, useParallax} from '@vueuse/core'
import TheContentBlock from "~/components/UI/TheContentBlock.vue";

const target = ref(null)
const isMobile = useMediaQuery('(max-width: 700px)')

const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
  transition: '.3s ease-out all',
}
const cardWindowStyle: CSSProperties = {
  margin: 'auto',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  margin: '3em auto',
  perspective: '300px',
}

const cardStyle = computed(() => ({
  transition: '.3s ease-out all',
  transform: `rotateX(${parallax.roll * 1}deg) rotateY(${
    parallax.tilt * 1
  }deg)`,
}))

const parallaxContainer = ref(null)
const {tilt, roll, source} = useParallax(parallaxContainer)


const props = defineProps({
  activeNav: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>

</style>




