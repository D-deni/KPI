<template>
  <div>
    <h3 class="text-center text-xl dark:text-white font-bold tracking-wider	">{{$t('Уведомления о заданиях')}}</h3>
    <div>
      <TheNotificationContent></TheNotificationContent>
    </div>
  </div>
</template>

<script>
import TheNotificationContent from "~/components/Tasks/TaskUI/TheNotificationContent.vue";

export default {
  name: "TasksNotification",
  components: {TheNotificationContent}
}
</script>

<style lang="scss" scoped>

</style>