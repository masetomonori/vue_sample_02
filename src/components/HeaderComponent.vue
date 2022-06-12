<template>
  <v-container>
  <v-row>
  <v-col cols="10">
    <v-toolbar flat dense>
        <v-toolbar-title>Vue Laravel SPA</v-toolbar-title>
        <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-bind:to="{name: 'task.list'}">
                    List
                </v-btn>    
                <v-btn v-bind:to="{name: 'task.create'}">
                    ADD
                </v-btn>
            </v-toolbar-items>
    </v-toolbar>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
    export default {}
</script>