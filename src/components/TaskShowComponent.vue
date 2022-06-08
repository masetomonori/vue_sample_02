<template>
    <div>
        <div>
            <div>
                <form>
                    <div>
                        <label>ID</label>
                        <input type="text" readonly id="id" v-model="task.id">
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" readonly id="title" v-model="task.name">
                    </div>
                    <div>
                        <label>Content</label>
                        <input type="text" readonly id="content" v-model="task.course">
                    </div>
                    <div>
                        <label>Person In Charge</label>
                        <input type="text" readonly id="person-in-charge" value="Ichiro">
                    </div>
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
            }
        },
        mounted() {
            this.getTask();
        }
    }
</script>