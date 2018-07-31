import *  as types from '../mutations-type'


const projectConfig = {
  state: {
    title:"",
    mapType: "3d",
    loadMap2d: true,
    loadMap3d: true,
    map2dConfig:{},
    map3dConfig:{}


  },
  getters: {
    getTitle: state => {
      return state.title;
    },
    get2dLoadTag: state => {
      return state.loadMap2d;
    },
    get3dLoadTag: state => {
      return state.loadMap3d;
    },
    getMapType: state => {
      return state.mapType;
    },
    getMap2DConfig: state => {
      return state.map2dConfig;
    },
    getMap3DConfig: state => {
      return state.map3dConfig;
    },
  },
  mutations: {
    [types.SET_APP_TITLE]: (state,val) => {
      state.title = val;
    },
    [types.SET_MAP_TYPE]: (state, val) => {
      state.mapType = val;
    },
    [types.SET_2DMAP_STATUS]: (state, val) => {
      state.loadMap2d = val;
    },
    [types.SET_3DMAP_STATUS]: (state, val) => {
      state.loadMap3d = val;
    },
    [types.SET_MAP2D_CONFIG]: (state, val) => {
      state.map2dConfig = val;
    },
    [types.SET_MAP3D_CONFIG]: (state, val) => {
      state.map3dConfig = val;
    },


  },
  actions: {
    setAppTitle({commit}, val) {
      commit(types.SET_APP_TITLE, val)
    },
    setMapType({commit}, val) {
      commit(types.SET_MAP_TYPE, val)
    },
    set2DMapStatus({commit},val){
      commit(types.SET_2DMAP_STATUS , val);
    },
    set3DMapStatus({commit},val){
      commit(types.SET_3DMAP_STATUS, val);
    },
    set2DMapConfig({commit},val){
      commit(types.SET_MAP2D_CONFIG, val);
    },
    set3DMapConfig({commit},val){
      commit(types.SET_MAP3D_CONFIG, val);
    }


  }
};

export default projectConfig
