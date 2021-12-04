<template>

    <main class="profile">
        
        {{profile}}

    </main>

</template>

<script>

import api from '@/api';

export default {
    
    name: 'Catalog',
    data: () => {
        return {
            profile: {}
        }
    },
    async created() {

        let profile = await api.getMyProfile();

        this.profile = JSON.stringify(profile)

    }

}

</script>

<style lang="scss" scoped>

</style>

