<template>
    
        <v-container>
            <v-row>
                <v-col>
                <p class="text-right"> {{ todos.length }} Tasks</p>
                </v-col>
            </v-row>
            <v-text-field
                label="Type your task in"
                v-model="todo"
                @keyup.enter="addTodo"
                >
                
            </v-text-field>
            
            
        </v-container>
    
</template>


<script>
export default {
    data(){
        return {
            todo: "",
            todos: this.$store.state.tasks

        }

    },
    methods: {
        addTodo(){
            this.$store.dispatch("getUsers", this.todo)
            this.todo = ""
        }
    }
    
}
</script>