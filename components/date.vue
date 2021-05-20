<template>
    
        <v-card>
            <v-card-text class="display-1">
                {{ date }}
            </v-card-text>

        </v-card>
    
</template>

<script>
export default {
    data(){
        return {
            
            date: this.$store.getters.getDate 
        }
    },
    /* computed: {
        date(){
            return 
        } 
    } */
    
    
}
</script>

