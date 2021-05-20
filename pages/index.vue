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
  }
  
  

  
}
</script>

<style scoped>

</style>

