<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen ">
        <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mb-4">Signup</h1>
        <form class="flex flex-col space-y-4 w-80" id="signupForm" >
            <input autocomplete="on" v-model="form.email" type="text" placeholder="Email" class="border border-gray-300 p-2 rounded-lg" />
            <hr>
            <input v-model="form.password" type="password" placeholder="Password" class="border border-gray-300 p-2 rounded-lg" />
            <input v-model="form.confirmationPassword" type="password" placeholder="Confirmation Password" class="border border-gray-300 p-2 rounded-lg" />
            <button @click="HandleOnSubmit" class="bg-blue-500 text-white p-2 rounded-lg" >Signup</button>
            
        </form>
        <span>
            {{ message }}
        </span>
        </div>
    </div>
</template>



<style scope>

hr{
    margin: 1em;
}
</style>
<script>

const defaultForm = {
    email: '',
    password: '',
    confirmationPassword: '',
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
            e.preventDefault()
            this.$emit('submit', this.form)
            console.log(this.form)
            // validate email

            if (!this.form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    this.message = 'Please enter a valid email'
                    return
                }
            // validate password
            if (!this.form.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
                this.message = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number'
                return
            }
            // validate confirmation password
            if (!this.form.confirmationPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
                this.message = 'Confirmation Passworsd must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number'
                return
            }
            // validate password and confirmation password
            if (this.form.password !== this.form.confirmationPassword) {
                this.message = 'Password and confirmation password must be the same'
                return
            }
            // signup
            this.message = ''
            const payload = {
                email: this.form.email,
                password: this.form.password
            }
            console.log("payload",payload)
            const response = await axios.post('/proxy/v2/users/create',{
                email: this.form.email,
                password: this.form.password
            }).then((response) => {
                console.log("response",response)
                this.success = true
                return response
            }).catch((error) => {
                console.log(error)
                return error
            })
            

            if(response.status === 201){
                this.message = 'Signup successful, please wait while we redirect you to the login page'
                //wait 5 seconds
                await new Promise(resolve => setTimeout(resolve, 5000));
                // redirect to home page
                this.$router.push('/login')

            }

            this.message = 'Signup failed'
            

            

        }
    }
}

</script>