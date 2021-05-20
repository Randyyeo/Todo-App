export default {
    getUsers(state, users){
        // hit api to get user
        var date = state.getters.getDate
        var values = [users, date]
        state.commit("addUsers", values)
        
    },
    getUsersAfterRemoved(state, index){
        state.commit("removeUsers", index)
    }
}

