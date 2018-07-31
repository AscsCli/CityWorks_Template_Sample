// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {setREM} from './plugin/setREM';
import "./api/mock/mock";

import 'babel-polyfill';
import Vue from 'vue';
import {registerRoute} from './router/index';
import store from './store/index';
import *  as types from './store/mutations-type'
import Rocket from '@cityworks/rocket-ui';
import '@cityworks/rocket-ui/rocket-theme/index.css';
import "./style/index.scss";
import  axios from "axios";

import projectConfigState from "./store/modules/projectConfig"




Vue.use(Rocket);
Vue.config.productionTip = false;
import frame from './pages/frame/frame.vue';
import {ApiFactor} from "./api/api-factor";
const baseUrl = API.baseUrl;
const apiConfs = API.apiList;

window.$apis = ApiFactor(baseUrl,apiConfs);

//REM计算
setREM.init();

import App from './App.vue';
import Router from "vue-router";

Vue.use(Router);



async function setConfig(){

  let projectJson = await getRouteJson("./static/config/projectConfig.json");

  let projectConfig = projectJson.data;

  try {

    projectConfigState.actions.setAppTitle(store.commit(types.SET_APP_TITLE, projectConfig.title

    ))
  }
  catch(e){

  }
  try {

    projectConfigState.actions.setMapType(store.commit(types.SET_MAP_TYPE, projectConfig.mapType

    ))
  }
  catch(e){

  }
  try {

    projectConfigState.actions.set2DMapStatus(store.commit(types.SET_2DMAP_STATUS, projectConfig.loadMap2d

    ))
  }
  catch(e){

  }
  try {

    projectConfigState.actions.set3DMapStatus(store.commit(types.SET_3DMAP_STATUS, projectConfig.loadMap3d

    ))
  }
  catch(e){

  }

  let map2DConfigJson = await getRouteJson("./static/config/2d/map2dConfig.json");
  try {

    projectConfigState.actions.set2DMapConfig(store.commit(types.SET_MAP2D_CONFIG, map2DConfigJson.data

    ))
  }
  catch(e){

  }

  let map3DConfigJson = await getRouteJson("./static/config/3d/map3dConfig.json");
  try {

    projectConfigState.actions.set3DMapConfig(store.commit(types.SET_MAP3D_CONFIG, map3DConfigJson.data

    ))
  }
  catch(e){

  }


  registerRoute.loadJson().then( (arr)=>{



    const router = new Router({
      routes: [

        {
          path: '/',
          name: 'frame',
          component: frame,
        },
        {
          path:'/home',
          name:'home',
          component:frame,
          children:arr

        },

      ]
    });

    var vm = new Vue({
      el: '#app',
      router,
      store,
      render:h => h(App)
    });


  })



}





setConfig();





function getRouteJson(url) {

  return new Promise((resolve, reject) => {

    axios.get(url).then( (res) => {

      resolve(res);
    })
  })
}



















