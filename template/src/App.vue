<template>
    <router-view></router-view>
</template>
<script>

  import {mapActions,mapGetters} from 'vuex';
  export default {
    methods: {
      ...mapActions({
        setAppTitle: 'setAppTitle',
        set2DMapStatus: 'set2DMapStatus',
        set3DMapStatus: 'set3DMapStatus',
        setMapType: 'setMapType',
      }),
    },
    beforeCreate(){


    },
  }
</script>
