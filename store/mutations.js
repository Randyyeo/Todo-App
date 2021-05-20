export default {
    addUsers(state, values){
        
        
        
        var newTodo = {id: state.id, title: values[0], added: values[1]}
        state.tasks.push(newTodo)
        state.id++
    },

    

    removeUsers(state, index){
        state.tasks.splice(index, 1)
    },

    

    
    
}