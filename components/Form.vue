<template>
    <form class="main__form" @submit.prevent="onSumbit">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Task..." aria-label="Task..." aria-describedby="button-addon2" v-model="title">
            <button class="btn btn-outline-primary" type="submit" id="button-addon2">Create Task</button>
        </div>
    </form>
</template>

<script>
export default {
    data: () => ({
        title: ''
    }),

    methods: {
        onSumbit () {
            if (this.title.trim()) {
                const task = {
                    id: Date.now(),
                    title: this.title,
                    done: false
                }

                this.$emit('addTask', task)
                this.title = ''
            }
        }
    }
}
</script>