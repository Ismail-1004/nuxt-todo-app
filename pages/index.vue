<template>
  <main class="container main">
    <h1 class="main__title"> Todo Application </h1>

    <Form 
      @addTask="createTask"
    />

    <Tasks 
      v-if="tasks.length > 0"
    />

    <p v-else class="main__empty"> No Tasks! </p>
    

  </main>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'IndexPage',

  methods: {
    ...mapMutations(['add_task', 'updateTasks']),

    createTask (task) {
      this.add_task(task)
    },

    checkLoclaStorage () {
      if (localStorage.getItem('tasks')) {
        const tasks = JSON.parse(localStorage.getItem('tasks'))

        this.updateTasks(tasks)
      }
    }
  },

  computed: {
    ...mapGetters(['tasks'])
  },

  created () {
    this.checkLoclaStorage()
  }
}
</script>

