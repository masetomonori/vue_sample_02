<template>
    <div>
        <div>
            <nav>
                <span>Vue Laravel SPA</span>
                <div>
                    <router-link v-bind:to="{name: 'task.list'}">
                        <button >List</button>
                    </router-link>
                    <router-link v-bind:to="{name: 'task.create'}">
                        <button >ADD</button>
                    </router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {}
</script>