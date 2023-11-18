<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'

</script>

<template>
<div>  {{ $route.params.id }} </div>
</template>


<script>

export default {
    name: 'ViewDocView',
    components: {
    },
    data() {
        return {
            access_token: localStorage.getItem('access_token'),
            user: null,
        }
    },
    methods: {
    },
    mounted() {
       
    }
}

</script>


<style scope>


</style>