<template>

    <main class="login">

      <aside class="auth-block">
        <div class="layer">

          <div class="auth-block__modal">
            <button type="button" class="auth-block__close button-close">X</button>


            <!--            Войти или зарегистрироваться-->
            <div class="auth-block__main auth-block__body" v-show="state == 'login'">
              <form class="auth-block__auth">
                <h2 class="auth-block__title">Войти</h2>
                <input type="text" class="text-input auth-block__input" v-model="login" placeholder="e-mail">
                <input type="password" class="text-input auth-block__input" v-model="password" placeholder="Пароль">
                <input type="submit" class="auth-block__button button" value="Вход" @click="handleLogin">
                <span v-show="status =='loading'">TODO: прелоадер!</span>
                <p class="auth-block__error" v-show="status =='error'" v-text="error_message"></p>
                <div v-for="(error, index) in errors" :key="index">
                    <p class="auth-block__error" v-text="error.join('\n')"></p>
                </div>
              </form>

              <div class="auth-block__reg-block reg-block">
                <p class="reg-block__text">Еще не зарегистрированы?</p>
                <button class="auth-block__button auth-block__button-registration button button-secondary" @click="changeState('register')">
                  Зарегистрироваться
                </button>
              </div>
            </div>
            <!--            //Войти или зарегистрироваться-->

            <!--            Регистрация-->
            <div class="auth-block__registration auth-block__body" v-show="state == 'register'">
              <div class="auth-block__auth">
                <h2 class="auth-block__title">Зарегистрироваться</h2>
                <input type="text" class="text-input auth-block__input" v-model="login" placeholder="e-mail">
                <input type="password" class="text-input auth-block__input" v-model="password" placeholder="Пароль">
                <input type="password" class="text-input auth-block__input" v-model="password_confirmation" placeholder="Подтверждение пароля">
                <span v-show="status =='loading'">TODO: прелоадер!</span>
                <button class="auth-block__button button" @click="handleRegister">Зарегистрироваться</button>
                <div v-for="(error, index) in errors" :key="index">
                    <p class="auth-block__error" v-text="error.join('\n')"></p>
                </div>
              </div>

              <div class="auth-block__reg-block reg-block">
                <p class="reg-block__text">Уже зарегистрированы?</p>
                <button class="auth-block__button auth-block__button-registration button button-secondary " @click="changeState('login')">
                  Войти
                </button>
              </div>
            </div>
            <!--            //Регистрация-->

            <!--            Введите код из SMS -->
            <!--
            <div  class="auth-block__sms auth-block__body">
              <button class="button button-secondary auth-block__btn-back"><-</button>
              <h2 class="auth-block__title auth-block__title-with-button">Введите SMS-код</h2>
              <p class="auth-block__user-info">Номер получателя: <span class="user-info__value">+7 999 999 99 99</span>
              </p>
              <input type="text" class="text-input auth-block__input" v-model="code" placeholder="Код из SMS">
              <p class="auth-block__error">Текст ошибки</p>
              <button class="auth-block__button button" @click="handleSubmit">Отправить</button>
            </div>
            -->
            <!--            //Введите код из SMS -->

            <!--            Введите код из письма -->
            <!--
            <div hidden class="auth-block__email auth-block__body">
              <button class="button button-secondary auth-block__btn-back"><-</button>
              <h2 class="auth-block__title auth-block__title-with-button">Введите код из e-mail</h2>
              <p class="auth-block__user-info">Почта получателя: <span class="user-info__value">+7 999 999 99 99</span>
              </p>
              <input type="text" class="text-input auth-block__input"  v-model="register" placeholder="Код из e-mail">
              <p class="auth-block__error">Текст ошибки</p>
              <button class="auth-block__button button" @click="handleSubmit">Отправить</button>
            </div>
            -->
            <!--          //  Введите код из письма -->

          </div>

        </div>

      </aside>

    </main>

</template>

<script>

export default {

    name: 'Login',
    data: () => {
        return {
            login : '',
            password: '',
            password_confirmation: '',
            state: 'login'
        }
    },
    methods: {
        async handleLogin(e){

            e.preventDefault();
        
            if ( this.login.length > 0 && this.password.length > 0) {

              let result = await this.$store.dispatch('login', {
                        login: this.login,
                        password: this.password
              })

              if ( result )
                  this.$router.push({name: 'Planes'}).catch(e => {})

            }

        },

        async handleRegister(e){

            e.preventDefault();
        
            if ( this.login.length > 0 && this.password.length > 0 && this.password_confirmation.length > 0) {

              let result = await this.$store.dispatch('register', {
                        login: this.login,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    })

              if ( result )
                  this.$router.push({name: 'Planes'}).catch(e => {})

            }

        },

        changeState(state) {

          this.$store.dispatch('clear_error');
          this.state = state;

        }

    },
    computed: {
        status: function() {
            return this.$store.getters.authStatus
        },
        errors: function() {
            return this.$store.getters.errors
        },
        error_message: function() {
            return this.$store.getters.error_message
        }
    },

}

</script>

<style lang="scss" scoped>

@import "@/scss/components/login/_login.scss";

</style>

