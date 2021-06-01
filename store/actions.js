export default {
    getUsers(state, values){
        // hit api to get user
        state.commit("addUsers", values)
        
    },
    async getUsersAfterRemoved(state, index){
        await state.commit("removeUsers", index)
    }
}

