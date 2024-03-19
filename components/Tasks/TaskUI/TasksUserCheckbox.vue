<template>
  <div>
    <label class="container w-full relative py-2 px-6 text-black  transition-all rounded-lg border"
           :class="{'bg-blueSemiLight text-white' : item.value === true}">
      <span class="relative z-10 dark:text-white">{{ item?.first_name + ' ' + item?.last_name }}</span>
      <input
        type="checkbox"
        @change="item.value = !item.value"
        :checked="item.value"
      >
      <span class="checkmark w-full h-full absolute top-0 left-0 "></span>
    </label>
  </div>
</template>

<script setup lang="ts">

defineProps({
  item: {
    type: Object,
    default: ()=>{}
  }
})
</script>

<style scoped>
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */


/* On mouse-over, add a grey background color */
.container input ~ .checkmark {
  border-radius: 5px;
  transition: 0.2s ease-in-out;

}


/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>