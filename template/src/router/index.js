import Vue from 'vue'
import Router from 'vue-router'

import axios from "axios"

export const registerRoute  = {}

registerRoute.loadJson = function () {


  return setRoute()

}


async function setRoute() {

  let comps = require.context('../../src', true, /\.vue$/);
  let childRoutes = comps.keys().map(key => comps(key));
  let newArr = comps.keys();
  console.log(childRoutes,newArr);


   let routeArr = [];
   let routePath = [];
   let map = new Map();
   let tool2dArr = await  getRouteJson("./static/config/2d/toolBar2d.json");

   for(let item of  tool2dArr.data.toolBars2d){
     if(item.type == "router"){
       if(!map.has(item.url)){
         routeArr.push(item);
         map.set(item.url,item);
       }

     }
   }
  let tool3dArr = await  getRouteJson("./static/config/3d/toolBar3d.json");

  for(let item of  tool3dArr.data.toolBars3d){
    if(item.type == "router"){
      if(!map.has(item.url)){
        routeArr.push(item);
        map.set(item.url,item);
      }

    }
  }
  let tabBarArr = await  getRouteJson("./static/config/centerTab.json");

  for(let item of  tabBarArr.data.tab2d){
    if(item.type == "router"){
      if(!map.has(item.url)){
        routeArr.push(item);
        map.set(item.url,item);
      }

    }
  }
  for(let item of  tabBarArr.data.tab3d){
    if(item.type == "router") {
      if (!map.has(item.url)) {
        routeArr.push(item);
        map.set(item.url,item);
      }
    }
  }

  for(let item of routeArr){
    if(item.url == undefined)
      continue;

    let arr = item.url.split("/");
    let file = arr.slice(-1);
    let fileName = file[0].replace(/\..+$/g,"");
    routePath.push({
      path: fileName,
      component: getComponent(item.url)
    })

  }
  return routePath;


  function getRouteJson(url) {

    return new Promise((resolve, reject) => {

      axios.get(url).then( (res) => {

        resolve(res);
      })
    })
  }

  function getComponent(url){

    for(let i = 0; i <newArr.length; i++){

      let defaultComponent = childRoutes[i].default;
      if(url == newArr[i])
        return defaultComponent;

    }

  }

}









