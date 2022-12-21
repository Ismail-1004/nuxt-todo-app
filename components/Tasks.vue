<template>
  <ul class="main__list">
    <Task 
        v-for="(task, key) in tasks" 
        :key="key" 
        :task="task" 
    />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["tasks"]),
  },
};
</script>