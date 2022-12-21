<template>
  <li class="main__list-item">
    <span :class="`${task.done ? 'done' : ''}`">
      {{ task.title }}
    </span>

    <div>
        <button class="main__list-done btn btn-primary" @click="toggle_task(task)">Done</button>
        <button class="main__list-delete btn btn-danger" @click="remove_task(task.id)">Delete</button>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    props: ["task"],

    methods: {
        ...mapMutations(['toggle_task', 'remove_task'])
    }
};
</script>