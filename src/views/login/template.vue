<template>

    <main class="login">

        <div>
        
            <h1>Ввод логина</h1>

            <input type="text" v-model="login">
            <button @click="handleSubmit">send</button>

        </div>

        <div>

            <h1>Ввод кода</h1>

            <input type="text" v-model="code">
            <button>send</button>

        </div>

        <div>
        
            <h1>Ввод логина для регистрации</h1>

            <input type="text" v-model="register">
            <button>send</button>

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
        async handleSubmit(e){

            e.preventDefault();
        
            if ( this.login.length > 0 && this.$store.dispatch('csrf')) {

                if ( this.$store.dispatch('login', {
                        login: this.login
                    }) )
                    this.$router.push()

            }

        }

    }

}

</script>

<style lang="scss" scoped>


</style>

