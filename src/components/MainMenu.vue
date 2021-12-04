<template>
        
    <header class="header">
        <div class="wrapper">
            <!--  Бургер>  -->
            <Burger/>
            <!-- // Бургер - end -->

            <a href="#" class="logo">HART <span>ESTATE</span>
            </a>

            <nav class="header__nav header__nav--mobile nav-js" data-active="false">
                <ul class="header__menu">
                    <li class="header__menu-item"><a href="/">Мои планировки</a></li>
                    <li class="header__menu-item"><a href="/profile">Профиль</a></li>
                    <li class="header__menu-item"><a href="#">Оплата</a></li>
                    <li class="header__menu-item"><a href="#">Помощь</a></li>
                    <li class="header__menu-item"><a href="#" @click="logout()">Выйти</a></li>
                </ul>
            </nav>
            <nav class="main-nav header__nav--desktop">
                <ul class="main-nav__list">
                    <li class="main-nav__item"><a href="/">Мои планировки</a></li>

                    <li class="main-nav__item main-nav__item--marked">
                        <span>Пользователь</span>
                        <ul class="main-nav__sublist">
                            <li class="main-nav__sublist-item"><a href="/profile">Профиль</a></li>
                            <li class="main-nav__sublist-item"><a href="#">Оплата</a></li>
                            <li class="main-nav__sublist-item"><a href="#">Помощь</a></li>
                            <li class="main-nav__sublist-item"><a href="#" @click="logout()">Выйти</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <button type="button" class="button download-button"><span>Загрузить планировку</span></button>
            <div class="balance">
                <span class="balance__title">Баланс:</span>
                <span class="balance__value">350 000 ₽</span>
            </div>
        </div>
        
    </header>

</template>

<script>

import Burger from "@/components/burger/template";

import {RevealMenu} from "./reveal-menu/src/js/App";
import {burgerAnim} from "./burger/src/js/App";

export default {
  name: 'MainMenu',
  components: {

    Burger

  },
  mounted: function () {

    // RevealMenu();
    burgerAnim();

  },
  methods: {
    logout() {
        this.$store.dispatch('logout');
        this.$router.push({name: 'Login'}).catch(e => {})
    }
  }
}

</script>

<style lang="scss">

@import '../scss/layouts/_header.scss';

</style>


