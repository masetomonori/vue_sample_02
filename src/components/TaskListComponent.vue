<template>
  <v-container>
  <v-row>
  <v-col cols="10">
  <v-data-table :headers="headers" :items="tasks">
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn icon v-bind:to="{name: 'task.show', params: {taskId: item.id }}">
        <v-icon small>mdi-eye</v-icon>
      </v-btn>
      <v-btn icon v-bind:to="{name: 'task.edit', params: {taskId: item.id }}">
        <v-icon small>mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon v-on:click="deleteTask(item.id)">
        <v-icon small>mdi-delete</v-icon>
      </v-btn>
    </template>
  </v-data-table>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data: () => ({
            headers: [
                {
                    text: '#',
                    align: 'start',
                    //sortable: false,
                    value: 'id',
                },
                { text: '名前', value: 'name' },
                { text: '所属', value: 'course' },
                //{ text: 'Carbs (g)', value: 'carbs' },
                //{ text: 'Protein (g)', value: 'protein' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            tasks:[]
        }),

        methods: {
            getTasks() {
                axios.get('http://localhost:8000/api/students/')
                    .then((res) => {
                        this.tasks = res.data;
                    });
            },
            deleteTask(id) {
                axios.delete('http://localhost:8000/api/students/' + id)
                    .then((/*res*/) => {
                        this.getTasks();
                    });
            }
        },
        mounted() {
            this.getTasks();
        }
    }
</script>
