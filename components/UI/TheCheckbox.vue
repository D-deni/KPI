<template>
  <label class="container mt-4 w-[250px]">
    <span class="text-black dark:text-white" v-if="t !== 'checkboxChat'">{{ item?.name }}</span>
    <span class="text-black dark:text-white" v-else>{{$t('Показать имя отправителя')}}</span>
    <input  v-if="t !== 'checkboxChat'"
      type="checkbox"
      @change="item.value = !item.value"
      :checked="item.value"
    >
    <input v-else
           type="checkbox"
           @change="chat.checkboxForwarded = !chat.checkboxForwarded"
           :checked="chat.checkboxForwarded"
    >
    <span class="checkmark"></span>
  </label>
</template>

<script setup lang="ts">
import {useChat} from "~/stores/chat";
defineProps({
  item: {
    type: Object,
    default: () => {
    }
  },
  check: {
    type: Boolean,
    default: true
  },
  t: {
    type: String,
    default: ''
  }
})

const chat = useChat()


</script>

<style scoped>
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
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
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container input ~ .checkmark {
  border: 1px solid #2988c8;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
}

.container:hover input ~ .checkmark {
  background-color: #3498db;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2988c8;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
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