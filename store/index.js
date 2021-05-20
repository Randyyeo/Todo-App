// state
export const state = () => ({
    tasks: [],
    id: 1
})

// getters
export const getters = {

}

// actions
export const actions = {
    getUsers(){
        // hit api to get user
        commit("addUsers, users")
        return tasks
    }
}

// mutations

export const mutations = {
    addUsers(state, todo){
        var newTodo = {id: state.id, title: todo}
        state.tasks.push(newTodo)
        state.id++
    }
}