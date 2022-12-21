export const state = () => ({
    tasks: []
})

export const mutations = {
    add_task (state, task) {
        state.tasks.unshift(task)

        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    remove_task (state, task) {
        console.log(task);
        state.tasks = state.tasks.filter(t => t.id !== task)

        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    toggle_task (state, task) {
        task.done = !task.done

        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    updateTasks (state, tasks) {
        console.log(tasks);
        state.tasks = tasks
    }
}

export const getters = {
    tasks (state) {
        return state.tasks
    }
}