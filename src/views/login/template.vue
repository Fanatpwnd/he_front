<template>

    <main class="login">

        <div>
        
            <h1>Ввод логина</h1>

            <input type="text" v-model="login">
            <button @click="handleRequest">Запросить код</button>

        </div>

        <div>

            <h1>Ввод кода</h1>

            <input type="text" v-model="code">
            <button @click="handleLogin">Залогиницо</button>

        </div>

        <div>
        
            <h1>Ввод логина для регистрации</h1>

            <input type="text" v-model="register">
            <button @click="handleRegister">Зарегацо</button>

        </div>


    </main>

</template>

<script>

export default {
    
    name: 'Catalog',
    data: () => {
        return {
            login : '',
            register: '',
            code: ''
        }
    },
    methods: {
        async handleLogin(e){

            e.preventDefault();
        
            if ( this.login.length > 0 && this.code.length > 0 && this.$store.dispatch('csrf')) {

                if ( this.$store.dispatch('login', {
                        login: this.login
                    }) )
                    this.$router.push()

            }

        },

        async handleRegister(e){

            e.preventDefault();
        
            if ( this.register.length > 0 && this.$store.dispatch('csrf')) {

                if ( this.$store.dispatch('register', {
                        login: this.register
                    }) )
                    this.$router.push()

            }

        },

        async handleRequest(e){

            e.preventDefault();
        
            this.$store.dispatch('request_code', {
                login: this.login
            })

        }

    }

}

</script>

<style lang="scss" scoped>


</style>

