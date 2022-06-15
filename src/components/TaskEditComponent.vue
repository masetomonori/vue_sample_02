<template>
    <v-form>
        <v-container>
            <v-row>
            <v-col cols="10">
            <v-text-field
                v-model="task.id"
                label="Number"
                readonly
            ></v-text-field>
            <v-text-field
                v-model="task.name"
                label="名前"
            ></v-text-field>
            <v-text-field
                v-model="task.course"
                label="所属"
            ></v-text-field>
            <v-btn  @click="submit">Submit</v-btn>
            </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>


<script>
    import axios from 'axios'
    export default {
        props: {
            taskId: String
        },
        data: function () {
            return {
                task: {}
            }
        },
        methods: {
            getTask() {
                axios.get('http://localhost:8000/api/students/' + this.taskId)
                    .then((res) => {
                        this.task = res.data[0];
                    });
            },
            submit() {
                axios.put('http://localhost:8000/api/students/' + this.taskId, this.task)
                    .then((/*res*/) => {
                        this.$router.push({name: 'task.list'})
                    });
            }
        },
        mounted() {
            this.getTask();
        }
    }
</script>
