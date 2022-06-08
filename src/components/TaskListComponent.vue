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

            <tr v-for="(task, index) in tasks" :key="index">
                <th scope="row">{{ task.id }}</th>
                <td>{{ task.name }}</td>
                <td>{{ task.course }}</td>
                <td>task.person_in_charge</td>
                <td>
                    <router-link v-bind:to="{name: 'task.show', params: {taskId: task.id }}">
                        <button>Show</button>
                    </router-link>
                </td>
                <td>
                    <router-link v-bind:to="{name: 'task.edit', params: {taskId: task.id }}">
                        <button>Edit</button>
                    </router-link>
                </td>
                <td>
                    <button v-on:click="deleteTask(task.id)">Delete</button>
                </td>
            </tr>
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