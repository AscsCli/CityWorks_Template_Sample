<template>
    <div class="left-wrap">
        <div class="menu-cont">
            <ul class="menu-list">
                 <li v-for="(item,index) in menu" :class="{active:item.show}" :key="index" @click="setActive(index,item)">
                    <p class="menu-icon">
                        <i class="icon iconfont" :class="item.class"></i>

                    </p>
                    <span></span>
                </li>
            </ul>
        </div>
            <div   class="menu-detail" :class="{menudetailnone:!showDeatil}">
                <div class="shouqi" @click="toggle">
                    <i class="icon-zhankaishouqi icon iconfont"></i>
                </div>
                <rk-menu v-if="showDeatil" :datas="obj" :title="menuTitle" :showeyes='show' @eyeClick="eyeclick" @itemClick="itemclick"></rk-menu>
            </div>
    </div>
</template>
<script>
    import { mapGetters,mapActions } from 'vuex';
    import {EventBus} from '../../eventBus/eventBus.js'
    import axios from 'axios'
    import projectConfig from "../../store/modules/projectConfig";


    export default {
        data(){
            return {
                menu:[],
                is3D:false,
                obj:[],
                menuTitle:'',
                show:true,
                default_index:0,
                menu2D:[],
                menu3D:[],
            }
        },
        components:{
        },
        computed:{
           ...mapGetters([
                'showDeatil',
                "get2dLoadTag",
                "get3dLoadTag",
                "getMapType",
           ])
        },
        methods:{
            itemclick(item){
                if(this.show == false){
                    EventBus.bus.emit("LEFT_DETAIL",item)
                }
            },
            eyeclick(item){
                EventBus.bus.emit("LEFT_DETAIL",item)
            },
            setActive(index,item){
                //收起动画效果
                this.$store.dispatch('CloseMenu',true);
                //左侧点击切换效果
                this.menu[this.default_index].show = false;
                this.menu[index].show = true;
                this.default_index = index;
                //赋值操作
                this.obj = this.menu[index].data;
                this.menuTitle = this.menu[index].title;
                this.show = this.menu[index].showeyes;

                //触发监听的LEFT_FIRSTC事件
                EventBus.bus.emit("LEFT_FIRSTC",item)
            },
            exportFuc(item){

            },
            toggle(){
                this.$store.dispatch('CloseMenu',false)
            },
            getJson(){


                  if(this.get2dLoadTag){
                    axios.get('./static/config/2d/menu_2d.json').then(res=>{
                      console.log(res,"111111111111")
                      let data = res.data.menu.title;
                      this.menu2D = data;
                      if(this.getMapType == "2d"){
                        this.menu =  this.menu2D;
                        this.menuTitle = this.menu[0].title;
                        this.obj = this.menu[0].data
                      }

                    })
                  }


                if(this.get3dLoadTag){
                  axios.get('./static/config/3d/menu_3d.json').then(res=>{
                    let data = res.data.menu.title;
                    this.menu3D = data;
                    if(this.getMapType == "3d"){
                      this.menu =  this.menu3D;
                      this.menuTitle = this.menu[0].title;
                      this.obj = this.menu[0].data
                    }
                  })
                }

            }
        },
        mounted(){

            this.getJson();
            EventBus.bus.addListener(EventBus.HEAD_ICON, (item)=>{

                if (item.title == "转换成3D") {
                  this.menu =  this.menu3D;
                  this.menuTitle = this.menu[0].title;
                  this.obj = this.menu[0].data
                }
            })
            EventBus.bus.addListener(EventBus.HEAD_ICON, (item)=>{

              if (item.title == "转换成2D") {
                this.menu =  this.menu2D;
                this.menuTitle = this.menu[0].title;
                this.obj = this.menu[0].data
              }
            })


        }
    }
</script>
