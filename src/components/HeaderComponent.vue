<template>
    <v-toolbar flat>
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
    
</template>

<script>
    export default {}
</script>