<template>
    <div>
        <table>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Person In Charge</th>
                <th scope="col">Show</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>

            <v-list v-for="(task, index) in tasks" :key="index">
                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>{{ task.id }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-title>{{ task.name }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-title>{{ task.course }}</v-list-item-title>
                        </v-list-item-content>

                        <v-btn v-bind:to="{name: 'task.show', params: {taskId: task.id }}">Show</v-btn>
                        <v-btn v-bind:to="{name: 'task.edit', params: {taskId: task.id }}">Edit</v-btn>
                        <v-btn v-on:click="deleteTask(task.id)">Delete</v-btn>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                tasks: []
            }
        },
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