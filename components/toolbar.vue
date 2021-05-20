<template>
    
        <v-card>
            <v-app-bar color="blue" dark>
                <v-toolbar-title class="display-1">To-do App</v-toolbar-title>
                <v-spacer></v-spacer>
            
                <v-btn fab color="blue" elevation="0">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">

                        <v-btn icon @click="change" v-on="on">
                            <v-icon>{{ Dark ? 'mdi-weather-night' : 'mdi-weather-cloudy' }}</v-icon>
                        </v-btn>
                    </template>
                        <span>
                        {{ Dark ? 'light mode' : 'dark mode' }}
                        </span>
                    
                </v-tooltip>
                
            </v-app-bar>
        </v-card>
        
   
</template>


<script>
export default {
    data(){
        return {
            Dark: false
        }
    },
    methods: {
        change(){
            this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
            this.Dark = !this.Dark
        }
    }

}
</script>