<template>
    <div>
        <div>
            <div>
                <form v-on:submit.prevent="submit">
                    <div>
                        <label>ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-model="task.id">
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" class="col-sm-9 form-control" id="title" v-model="task.name">
                    </div>
                    <div>
                        <label>Content</label>
                        <input type="text" class="col-sm-9 form-control" id="content" v-model="task.course">
                    </div>
                    <!--div>
                        <label>Person In Charge</label>
                        <input type="text" class="col-sm-9 form-control" id="person-in-charge">
                    </div-->
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
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
