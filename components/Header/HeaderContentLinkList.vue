<script setup lang="ts">

import HeaderContentElems from "~/components/Header/HeaderUI/HeaderContentElems.vue";
import HeaderContentLink from "~/components/Header/HeaderUI/HeaderContentLink.vue";
</script>

<template>
  <div>
    <HeaderContentElems class="hidden max-[800px]:flex"/>
    <HeaderContentLink>
      <template v-slot:headerContentIcon>
        <div>
          <svg width="30px" height="30px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_503_2726)">
              <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5"
                    stroke-width="0.5"/>
              <mask id="mask0_503_2726" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                    width="28" height="20">
                <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white"
                      stroke-width="0.5"/>
              </mask>
              <g mask="url(#mask0_503_2726)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z"
                      fill="#0C47B7"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"/>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_503_2726">
                <rect width="28" height="20" rx="2" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </template>
      <template v-slot:headerContentText>
        <h3>{{ $t('Русский') }}</h3>
      </template>
    </HeaderContentLink>
    <HeaderContentLink to="profile">
      <template v-slot:headerContentIcon>
        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z"
          />
        </svg>
      </template>
      <template v-slot:headerContentText>{{ $t('Личная информация') }}</template>
    </HeaderContentLink>
    <HeaderContentLink to="companies">
      <template v-slot:headerContentIcon>
        <svg width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
          <path
            d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"/>
        </svg>
      </template>
      <template v-slot:headerContentText>
        {{ $t('Информация о Компании') }}
      </template>
    </HeaderContentLink>
    <HeaderContentLink to="tasks">
      <template v-slot:headerContentIcon>
        <svg width="30px" class="dark:stroke-white stroke-black" height="30px" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M12.37 8.87988H17.62" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.37 15.8799H17.62" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </template>
      <template v-slot:headerContentText>{{ $t('Мои задания') }}</template>
    </HeaderContentLink>
  </div>
</template>

<style scoped lang="scss">

</style>