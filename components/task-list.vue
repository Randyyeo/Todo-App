<template>
    <v-container>
        <v-list>
            <v-subheader v-if=" tasks.length === 0" class="subheading">
                You have 0 tasks, go and add some!
            </v-subheader>
            <v-subheader v-else class="subheading mt-2" >
                Your Tasks
            </v-subheader>
            <v-list-item-group>
            <v-list-item
                v-for="(task, index) in tasks"
                :key="index"
                class="mt-4">
                <template #default="{ active, toggle }">
                    <v-list-item-action>
                        <v-checkbox @click="toggle"></v-checkbox>
                        
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title >
                            {{ task.title }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Added on: {{ task.added }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-btn fab small color="red" v-if="active" @click="remove(task, index)">
                        <v-icon >mdi-close</v-icon>
                    </v-btn>
                </template>
                
                    
                        
                    
                
                
            </v-list-item>
            </v-list-item-group>
        </v-list>
        
    </v-container>
</template>


<script>
import firebase from "firebase/app"
import "firebase/firestore"
export default {
    data(){
        return {
            selected: "",
            active: false
        }
    },
    methods: {
        toggle(){
            this.active = !this.active
        },

        remove(task, index) {
            firebase.firestore().collection("todos").doc(task.id).delete().then(()=>{
                this.$store.dispatch("getUsersAfterRemoved", index);
            })
            
        },
    },
    computed: {
        tasks(){
            return this.$store.state.tasks
        },
    
        selected(name){
            return this.selected === name
        }
    }


    
}
</script>