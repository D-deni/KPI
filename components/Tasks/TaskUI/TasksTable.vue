<template>
  <div>
    <table>
      <tr>
        <th class="opacity-80 tracking-widest cursor-pointer "><slot name="tableHead"/></th>
      </tr>
      <tr>
        <td class="text-sm tracking-widest"><slot name="tableBody"/></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>