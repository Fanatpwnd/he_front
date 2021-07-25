<template>

    <div>

        <button class="filter-btn button button-secondary filter-btn-js">Показать фильтр</button>
        <aside class="filter filter-js">
            
            <Search />
            
                <ul class="filter-list">
                    <li class="filter-item">
                        <span class="filter-item__title">Сортировка</span>
                        <label class="radio-container">По дате загрузки
                            <input type="radio" name="radio">
                            <span class="radio-checkmark"></span>
                        </label>
                        <label class="radio-container">По названию
                            <input type="radio" name="radio">
                            <span class="radio-checkmark"></span>
                        </label>
                    </li>
                    <li class="filter-item">
                        <span class="filter-item__title">Количество комнат</span>
                        <label class="checkbox-container">Студия
                            <input type="checkbox" checked="checked" value="0">
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">3
                            <input type="checkbox" value="3">
                            <span class="checkmark"></span>
                        </label>

                        <label class="checkbox-container">1
                            <input type="checkbox" value="1">
                            <span class="checkmark"></span>
                        </label>

                        <label class="checkbox-container">4
                            <input type="checkbox" value="4">
                            <span class="checkmark"></span>
                        </label>

                        <label class="checkbox-container">2
                            <input type="checkbox" value="2">
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">5+
                            <input type="checkbox" value="5">
                            <span class="checkmark"></span>
                        </label>
                    </li>

                    <li class="filter-item">
                        <span class="filter-item__title">Отображать</span>
                        <label class="radio-container">Все
                            <input type="radio" name="radio">
                            <span class="radio-checkmark"></span>
                        </label>
                        <label class="radio-container">Только обработанные
                            <input type="radio" name="radio">
                            <span class="radio-checkmark"></span>
                        </label>
                    </li>

                    <li class="filter-item">
                        <span class="filter-item__title">Площадь</span>

                            <input class="small-input" type="text" name="radio" placeholder="от">

                            <input class="small-input" type="text" name="radio" placeholder="до">

                    </li>


                </ul>
        </aside>

    </div>

</template>

<script>

import Search from '@/components/search/template';

export default {
  name: 'PlaneFilter',
  components: {
      Search
  }
}

</script>

<style lang="scss" scoped>

@import './src/scss/main.scss';

</style>
