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
import firebase from 'firebase/app'
import "firebase/firestore"
export default {
    data(){
        return {
            todo: "",
            todos: this.$store.state.tasks

        }

    },
    methods: {
        addTodo(){
            if (this.todo){
                firebase.firestore().collection("todos").add({

                }).then((res)=>{
                    firebase.firestore().collection("todos").doc(res.id).set({
                        todo: this.todo,
                        date: this.$store.getters.getDate,
                        id: res.id
                    
                    }).then(()=>{
                        this.$store.commit("addUsers", {"todo": this.todo, "id": res.id, "date": this.$store.getters.getDate})
                        this.todo = ""
                    })
                })
            }
            
        }
    }
    
}
</script>