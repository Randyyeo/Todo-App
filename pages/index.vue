<template>
  <div id="app"> 
    <v-app>
      <toolbar></toolbar>
      <date></date>
      <task></task>
      <task-list>
        <slot :active="active" :toggle="toggle"></slot>
      </task-list>
      
    </v-app>
  </div>
</template>

<script>
/* import toolbar from "@/components/toolbar"
import date from "@/components/date"
import task from "@/components/task" */


import firebase from "firebase/app"
import "firebase/firestore"
export default {
  
  /* components:{
    toolbar,
    date,
    task
  } */
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
      this.$emit("change", this.active);
    }
  },
  mounted() {
    firebase.firestore().collection("todos").get().then(res => {
      res.forEach(x => {
        this.$store.dispatch("getUsers", x.data())
      })
    })
  }
  
  

  
}
</script>

<style scoped>

</style>

