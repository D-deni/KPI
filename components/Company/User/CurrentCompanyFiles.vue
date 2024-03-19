<script setup lang="ts">
import CurrentCompanyElems from "~/components/Company/CompanyUI/CurrentCompanyElems.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";

const authStore = useAuthStore()
const companies = useCompanies()
</script>

<template>
  <div class="flex max-[900px]:flex-wrap gap-y-10 w-full justify-center mx-auto container gap-x-10">
    <CurrentCompanyElems class="w-9/12 max-[900px]:w-full">
      <template v-slot:blockTitle>
        <TheTextContent>{{ $t('Галерея') }}</TheTextContent>
      </template>
      <template v-slot:blockContent>
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
        delay: 4000,
        disableOnInteraction: true
      }"
          :creative-effect="{
        prev: {
          shadow: true,
          translate: ['-100%', 0, -1]
        },
        next: {
          shadow: true,
          translate: ['100%', 0, 0]
        }
      }"
        >
          <SwiperSlide class=" rounded-lg" v-for="item in companies.company?.pictures">
            <img class="w-full h-[500px]" :src="authStore.get_server_domain + item.photo_url" alt="">
          </SwiperSlide>
        </Swiper>
      </template>
    </CurrentCompanyElems>
    <CurrentCompanyElems class="w-4/12 max-[900px]:w-full ml-auto">
      <template v-slot:blockTitle>
        <TheTextContent>{{ $t('Файлы') }}</TheTextContent>
      </template>
      <template v-slot:blockContent>

      </template>
    </CurrentCompanyElems>
  </div>
</template>

<style scoped lang="scss">
.swiper-slide {
}
.swiper-wrapper {
}
</style>