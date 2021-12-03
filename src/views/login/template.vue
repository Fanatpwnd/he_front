<template>

    <main class="login">

      <aside class="auth-block">
        <div class="layer">

          <div class="auth-block__modal">
            <button type="button" class="auth-block__close button-close">X</button>


            <!--            Войти или зарегистрироваться-->
            <div hidden class="auth-block__main auth-block__body">
              <div class="auth-block__auth">
                <h2 class="auth-block__title">Войти</h2>
                <input type="text" class="text-input auth-block__input" v-model="login" placeholder="Телефон или e-mail">
                <button class="auth-block__button button" @click="handleSubmit">Получить код</button>
              </div>

              <div class="auth-block__reg-block reg-block">
                <p class="reg-block__text">Еще не зарегистрированы?</p>
                <button class="auth-block__button auth-block__button-registration button button-secondary " @click="handleSubmit">
                  Зарегистрироваться
                </button>
              </div>
            </div>
            <!--            //Войти или зарегистрироваться-->

            <!--            Регистрация-->
            <div hidden class="auth-block__registration auth-block__body">
              <div class="auth-block__auth">
                <h2 class="auth-block__title">Зарегистрироваться</h2>
                <input type="text" class="text-input auth-block__input" v-model="login" placeholder="Телефон или e-mail">
                <button class="auth-block__button button" @click="handleSubmit">Получить код</button>
              </div>

              <div class="auth-block__reg-block reg-block">
                <p class="reg-block__text">Уже зарегистрированы?</p>
                <button class="auth-block__button auth-block__button-registration button button-secondary " @click="handleSubmit">
                  Войти
                </button>
              </div>
            </div>
            <!--            //Регистрация-->

            <!--            Введите код из SMS -->
            <div  class="auth-block__sms auth-block__body">
              <button class="button button-secondary auth-block__btn-back"><-</button>
              <h2 class="auth-block__title auth-block__title-with-button">Введите SMS-код</h2>
              <p class="auth-block__user-info">Номер получателя: <span class="user-info__value">+7 999 999 99 99</span>
              </p>
              <input type="text" class="text-input auth-block__input" v-model="code" placeholder="Код из SMS">
              <p class="auth-block__error">Текст ошибки</p>
              <button class="auth-block__button button" @click="handleSubmit">Отправить</button>
            </div>
            <!--            //Введите код из SMS -->

            <!--            Введите код из письма -->
            <div hidden class="auth-block__email auth-block__body">
              <button class="button button-secondary auth-block__btn-back"><-</button>
              <h2 class="auth-block__title auth-block__title-with-button">Введите код из e-mail</h2>
              <p class="auth-block__user-info">Почта получателя: <span class="user-info__value">+7 999 999 99 99</span>
              </p>
              <input type="text" class="text-input auth-block__input"  v-model="register" placeholder="Код из e-mail">
              <p class="auth-block__error">Текст ошибки</p>
              <button class="auth-block__button button" @click="handleSubmit">Отправить</button>
            </div>
            <!--          //  Введите код из письма -->

          </div>

        </div>

      </aside>

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

@import "@/scss/components/login/_login.scss";

</style>

