<template>
    <div>
        <div>
            <div>
                <form v-on:submit.prevent="submit">
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
                    <button type="submit" class="btn btn-primaryy">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    //export default {}
    export default {
        data: function () {
           return {
               task: {}
           }
        },
        methods: {
            submit() {
                axios.post('http://localhost:8000/api/students/', this.task)
                    .then((/*res*/) => {
                        this.$router.push({name: 'task.list'});
                    });
            }
        }
    }
</script>