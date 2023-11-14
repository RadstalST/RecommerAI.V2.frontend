<script setup>


import { RouterLink, RouterView } from 'vue-router'

import axios from 'axios'

if (localStorage.getItem('access_token') == null) {
    window.location.href = '/login'
}

</script>
<template>

    <div>
        <h1>This is Dashboard</h1>
        <h2> This is token</h2>
        <h3>{{access_token}}</h3>
        <h2> This is user</h2>
        <h3>{{user}}</h3>
    </div>
</template>

<script>
export default {
    name: 'DashboardView',
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
        //get user info
        const response = axios.get(
            "/proxy/v2/users/me",
            {
                headers: {
                'Authorization': 'Bearer ' + this.access_token
                }
            }
        ).then((response) => {
            console.log("response",response)
            if (response.status === 200) {
                this.success = true
                this.user = response.data
            }
        }).catch((error) => {
            console.log("error",error)
            if (error.response.status === 401) {
            }
        })
    }
}
</script>