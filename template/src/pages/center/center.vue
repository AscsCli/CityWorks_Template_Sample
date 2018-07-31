<template>
    <div class="center-con">
        <div class="center-wrap">
            <div style="width:100%;">
                <rk-tab :routers="routers" @changeTab="changeTab" v-model="activeLabel"></rk-tab>
            </div>

        </div>
        <div class="mapcont">

        </div>
    </div>
</template>

<script>

  import {EventBus} from "../../eventBus/eventBus";
  import { mapGetters,mapActions } from 'vuex';

  export default {
    components: {

    },
    data() {
      return {

        defaultLink: 5,
        is3d: true,
        activeLabel: '地理变化',
        routers: [],
        routers2d: [],
        routers3d: [],
        isShow: false
      }
    },
    computed: {
      ...mapGetters([
        "getMapType",
      ]),

    },
    methods: {
      changeTab(item) {
        EventBus.bus.emit(EventBus.CENTER_TAB,item);
      }
    },
    watch: {
      getMapType: function (val) {
        if (val == "3d") {
          this.routers = this.routers3d;
        } else {
          this.routers = this.routers2d;
        }
      }
    },
    mounted() {




      window.$apis.getCenterTab().then(val => {
        this.routers2d = val.data.tab2d;
        this.routers3d = val.data.tab3d;
        if (this.getMapType == "2d") {
          this.routers = this.routers2d;

        } else {
          this.routers = this.routers3d;
        }
      })
    }
  }
</script>

