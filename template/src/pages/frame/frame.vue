<template>
    <div class="container">
        <div class="head-wrap">
            <head-dom></head-dom>
        </div>
        <div class="main-wrap">
            <div class="menu-wrap">
                <left-menu></left-menu>
            </div>
            <div class="center">
                <center-dom></center-dom>
            </div>
            <div class="right-wrap">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  import headDom from '../head/head';
  import leftMenu from '../leftmenu/leftMenu';
  import centerDom from '../center/center';
  import {listenerInit} from "../../listener/listenerInit"

  export default {
    components: {
      headDom,
      leftMenu,
      centerDom,
    },
    computed: {},
    mounted(){
      listenerInit.init(this.$router);
    },
    destroyed(){
      listenerInit.remove();
    }
  }
</script>
