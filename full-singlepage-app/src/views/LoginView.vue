<script setup>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mb-4">Login</h1>
        <form class="flex flex-col space-y-4 w-80" id="loginForm">
            <input autocomplete="on" v-model="form.username" type="text" placeholder="Email" class="border border-gray-300 p-2 rounded-lg" />
            <input v-model="form.password" type="password" placeholder="Password" class="border border-gray-300 p-2 rounded-lg" />
            <button @click="HandleOnSubmit" class="bg-blue-500 text-white p-2 rounded-lg" >Login</button>
            <RouterLink to="/signup" class="text-blue-500">Don't have an account? Sign up</RouterLink>
        </form>
        <span>
            {{ message }}
        </span>
        </div>
    </div>
</template>

<script>

const defaultForm = {
    username: '',
    password: '',
    }  

export default {
    
    data() {
        return {
            form: {...defaultForm},
            message: '',
            success: false
        }
    },
    methods:{
        async HandleOnSubmit(e){
            console.log("HandleOnSubmit")
            e.preventDefault()
            this.$emit('submit', this.form)
            console.log(this.form)
            const payload = {
                grant_type:null,
                client_id:null,
                client_secret:null,
                scope:null,
                username:this.form.username,
                password:this.form.password,

            }
            if (!this.form.username.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    this.message = 'Please enter a valid email'
                    return
                }
            // // validate password
            // if (!this.form.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            //     this.message = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number'
            //     return
            // }
            // application/x-www-form-urlencoded
            const response = await axios.post(
                '/api/v2/auth/token', 
                payload,{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
                ).then((response) => {
                    console.log("response",response)
                    if (response.status === 200) {
                        this.success = true
                        this.message = 'Login successful'
                        const accessToken = response.data.access_token
                        //store token in local storage
                        localStorage.setItem('access_token', accessToken)
                        //redirect to dashboard
                        this.$router.push('/dashboard')
                    } 
                    this.message = 'Login failed'
                    
                }).catch((error) => {
                    console.log("error",error)
                })
                
            
        }
    }
}

</script>