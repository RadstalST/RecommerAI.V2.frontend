<script setup>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                Recommer.ai
            </router-link>
            <div class="navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto justify-content-end flex-nowrap">
                    <!-- <li class="nav-item">
                        <router-link to="/" class="nav-link">Search</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/history" class="nav-link">History</router-link>
                    </li> -->
                    <li class="nav-item" v-if="isLogin()">
                        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
                    </li>
                    <li class="nav-item" v-if="isLogin()">
                        <router-link to="/logout" v-on:click="handleLogout" class="nav-link">Logout</router-link>
                    </li>
                    <li class="nav-item" v-else>
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    components: {},
    data() {
        return {
            user: null,
            access_token: localStorage.getItem('access_token'),
        }
    },
    methods: {
        isLogin() {
            return this.access_token != null
        },
        handleLogout() {
            localStorage.removeItem('access_token')
            window.location.href = '/login'
        },
    },
    mounted() {
        if (localStorage.getItem('access_token') == null) {
            return
        }
        const response = axios
            .get('/proxy/v2/users/me', {
                headers: {
                    Authorization: 'Bearer ' + this.access_token,
                },
            })
            .then((response) => {
                console.log('response', response)
                if (response.status === 200) {
                    this.success = true
                    this.user = response.data
                }
            })
            .catch((error) => {
                console.log('error', error)
                if (error.response.status === 401) {
                }
            })
    },
}
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.9) !important;
}

.navbar-brand {
    margin-right: 1rem;
}

.navbar-nav {
    margin-left: auto;
}

.nav-link {
    margin-right: 1rem;
    color: #333;
}

.nav-link:hover {
    color: #007bff;
}

</style>
