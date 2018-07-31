<template>
  <rk-section :model="'测量工具'" :closeFlag='closeflag'>
    <div class="measure_tool">
      <div v-for="item in buttons"   @click="querySelect(item.type)" href="javascript:;" class="mes_gl">
        <i :class="[item.class,' icon iconfont']"></i>
        <span class="mes_name">{{item.name}}</span>
      </div>
      <div class="button_wrap">
        <p style="color: #73a1c5">{{resultLabel}}</p>
      </div>
    </div>
  </rk-section>
</template>
<script>

  export default {
    components: {},
    data() {
      return {
        closeflag:true,
        selectedIndex: 0,
        resultLabel: "",
        isCoordFlag:true,
        buttons: [
          {
            name: "测距离",
            class: "icon-shangxiashuipingtuodong",
            type: "distance"
          },
          { name: "测面积", class: "icon-cemianji", type: "area" },
          { name: "测坐标", class: "icon-cezuobiao", type: "coord" }
        ],
        options: [{ name: "米" }, { name: "厘米" }, { name: "毫米" }]
      };
    },
    methods: {
      querySelect: function(type) {
        if (type == "distance") {

        } else if (type == "area") {


        } else if (type == "coord") {

        }
      }
    },
    computed: {},
    mounted() {


    },
    destroyed() {

    }
  };
</script>
<style lang="scss">
  .mes_gl {
    margin: 0.3rem 0.3rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    i {
      font-size: 0.3rem;
    }
    .mes_name {
      margin-left: 0.1rem;
    }
  }
  .button_wrap {
    margin: 0.2rem 0 0 0.32rem;
    font-size: .2rem;
  }
  .button_wrap:after {
    content: "";
    display: block;
    clear: both;
  }
</style>
