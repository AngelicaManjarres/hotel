<template>
    <div class="container">
        <form class="form-group col-8 cl-md-6 ">
            <input class="" type="text" placeholder="Usuario" v-model="username" />
            <input class="" type="password" placeholder="Password" v-model="password" />
            <div class="text-center">
                <p v-if="error" class="text-danger text-start ms-4 fs-6">
                    {{ error }}
                </p>
                <button @click.prevent="login" type="submit" class="btn btn-dark mt-5">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    
    data() {
        return {
            store: this.$store,
            username: '',
            password: "",
            error: '',
            user: []
        };
    },
    methods: {
        async login() {
            if (this.username == "" || this.password == "") {
                this.error = 'Por favor llene los campos';
                console.log("Fields required");
            } else {
                await this.store.dispatch('onLogin', {username: this.username, password: this.password})
                this.error = 'Usuario no encontrado'
                
            }
        },
    },
};
</script>

<style>
form {
    margin: auto;
}

input {
    padding: 5px;
    width: 90%;
    margin-bottom: 25px;
    background: #f8f8f8;
    border: none;
    border-bottom: 1.5px solid #333;
}

button {
    background: #2e4372 !important;
}
</style>
