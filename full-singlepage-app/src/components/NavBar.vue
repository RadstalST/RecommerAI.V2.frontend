<script setup>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <RouterLink to="/"  class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recommer.ai</span>
    </RouterLink>

    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <RouterLink to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black  dark:text-white md:dark:text-blue-500" aria-current="page">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="/about" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black  dark:text-white md:dark:text-blue-500" aria-current="page">About</RouterLink>
        </li>
        <li v-if="isLogin()">
            <RouterLink to="/dashboard" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black  dark:text-white md:dark:text-blue-500" aria-current="page">Dashboard</RouterLink>
        </li>
        <li v-if="isLogin()">
            <a v-on:click="handleLogout" class="block py-2 px-3 text-white bg-black rounded-lg" aria-current="page">logout</a>
        </li>
        <li v-else>
            <RouterLink to="/login" class="block py-2 px-3 text-white bg-black rounded-lg" aria-current="page">Login</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
    export default {
        name: 'NavBar',
        components: {
        },
        data() {
            return {
                user: null,
                access_token: localStorage.getItem('access_token'),
            }
        },
        methods: {
            isLogin(){
                return this.access_token != null
            },
            handleLogout(){
                localStorage.removeItem('access_token')
                window.location.href = '/login'
            }
        },
        mounted() {
            if (localStorage.getItem('access_token') == null) {
                return
            }
            const response = axios.get(
                "/api/v2/users/me",
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