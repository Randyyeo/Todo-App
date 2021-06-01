export default {
    addUsers(state, values){
        
        var newTodo = {id: values.id, title: values.todo, added: values.date}
        state.tasks.push(newTodo)
        console.log(newTodo)
    },

    

    removeUsers(state, index){
        state.tasks.splice(index, 1)
    },

    

    
    
}