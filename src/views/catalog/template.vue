<template>

    <main class="catalog">
        <div class="wrapper">
            <div class="catalog-top">
                <h1 class="page-title title">Мои планировки</h1>

                <div class="catalog-category">
                    <button class="catalog-category__active button button-switcher active">Активные</button>
                    <button class="catalog-category__archive button button-switcher">Архив</button>
                </div>



                <div class="catalog-view">
                    <button class="button-grid button-round button-round-active">
                        <svg id="icon_list" fill="none" height="8" viewBox="0 0 10 8" width="10" xmlns="http://www.w3.org/2000/svg">
                            <path d="m1.03449 0c-.571385 0-1.03449.488365-1.03449 1.0909 0 .60254.463105 1.09092 1.03449 1.09092.57138 0 1.03448-.48836 1.03448-1.09092 0-.602553-.4631-1.0909-1.03448-1.0909zm0 2.90908c-.571385 0-1.03449.48838-1.03449 1.09092 0 .60256.463105 1.09092 1.03449 1.09092.57138 0 1.03448-.48836 1.03448-1.09092 0-.60254-.4631-1.09092-1.03448-1.09092zm0 2.90911c-.571385 0-1.03449.48835-1.03449 1.09089 0 .60255.463105 1.09092 1.03449 1.09092.57138 0 1.03448-.48837 1.03448-1.09092 0-.60254-.4631-1.09089-1.03448-1.09089zm2.75861-4.00001h5.51724c.38103 0 .68966-.32546.68966-.72728 0-.40181-.30863-.727272-.68966-.727272h-5.51724c-.38102 0-.68965.325462-.68965.727272 0 .40182.30863.72728.68965.72728zm5.51724 1.45455h-5.51724c-.38102 0-.68965.32546-.68965.72727s.30863.72727.68965.72727h5.51724c.38103 0 .68966-.32546.68966-.72727s-.30863-.72727-.68966-.72727zm0 2.90909h-5.51724c-.38102 0-.68965.32545-.68965.72726s.30863.72727.68965.72727h5.51724c.38103 0 .68966-.32546.68966-.72727s-.30863-.72726-.68966-.72726z" fill="#24aef6"/>
                        </svg>
                    </button>
                    <button class="button-list button-round">
                        <svg id="icon_grid" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.000976562" y="0.000244141" width="2.66681" height="2.58079" rx="1" fill="white"/>
                            <rect x="3.66699" width="2.66681" height="2.58079" rx="1" fill="white"/>
                            <rect x="7.33398" y="0.000244141" width="2.66681" height="2.58079" rx="1" fill="white"/>
                            <rect y="3.54858" width="2.66681" height="2.58079" rx="1" fill="white"/>
                            <rect x="3.66699" y="3.54858" width="2.66681" height="2.58079" rx="1" fill="white"/>
                            <rect x="7.33398" y="3.54858" width="2.66681" height="2.58079" rx="1" fill="white"/>
                            <rect y="7.41968" width="2.66681" height="2.58079" rx="1" fill="white"/>
                            <rect x="3.66699" y="7.41968" width="2.66681" height="2.58079" rx="1" fill="white"/>
                            <rect x="7.33398" y="7.41968" width="2.66681" height="2.58079" rx="1" fill="white"/>
                        </svg>
                    </button>
                </div>


            </div>
            <div class="catalog-bottom">

                <PlaneFilter />

                <div class="catalog-list view-list">
                    
                    <Card v-for="(plane, index) in planes" :key="index" v-bind:plane="plane"/>

                </div>
            </div>

        </div>

    </main>

</template>

<script>

import {changeCatalogView} from './src/js/App';
import Card from '@/components/card/template';
import PlaneFilter from '@/components/filter/template';
import api from '@/api';

export default {
    
    name: 'Catalog',
    data: () => {
        return {
            planes : [
                {
                    'id' : 1,
                    'img' : '/images/plan.jpg',
                    'title' : '1-к.  39,6 м², 1/5 эт. 2345685 -4-765-03 1-к.  39,6 м², 1/5 эт. 2345685 -4-765-03',
                    'price' : '30 000 000 ₽',
                    'description' : 'Абзац описания карточки планировки rjnjhsq очень очень длинный, возможно даже на несколько строчек b ,jktt njujfdfdfdfdffdfd fdfddd'
                },
                {
                    'id' : 2,
                    'img' : '/images/plan.jpg',
                    'title' : '1-к.  39,6 м², 1/5 эт. 2345685 -4-765-03 1-к.  39,6 м², 1/5 эт. 2345685 -4-765-03',
                    'price' : '30 000 000 ₽',
                    'description' : 'Абзац описания карточки планировки rjnjhsq очень очень длинный, возможно даже на несколько строчек b ,jktt njujfdfdfdfdffdfd fdfddd'
                },
                {
                    'id' : 3,
                    'img' : '/images/plan.jpg',
                    'title' : '1-к.  39,6 м², 1/5 эт. 2345685 -4-765-03 1-к.  39,6 м², 1/5 эт. 2345685 -4-765-03',
                    'price' : '30 000 000 ₽',
                    'description' : 'Абзац описания карточки планировки rjnjhsq очень очень длинный, возможно даже на несколько строчек b ,jktt njujfdfdfdfdffdfd fdfddd'
                }
            ]
        }
    },
    components: {
        Card,
        PlaneFilter
    },
    async created() {

        let planes = await api.getPlans();

    },
    mounted() {
        
        changeCatalogView();

    }

}

</script>

<style lang="scss" scoped>

@import './src/scss/catalog.scss';

</style>

