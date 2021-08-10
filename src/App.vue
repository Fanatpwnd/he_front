<template>
  <div id="app">

    <MainMenu v-if="isLoggedIn"/>
    
    <router-view/>

  </div>
</template>

<script>

import MainMenu from '@/components/MainMenu.vue';

export default {
  components: {
    MainMenu
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
    }
  },

}

</script>
