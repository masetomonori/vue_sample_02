<template>
    <v-form>
        <v-container>
            <v-row>
            <v-col cols="10">
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