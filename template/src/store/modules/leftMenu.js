const leftMenu = {
  state: {
    showDeatil: true
  },

  mutations: {
    SET_SHOWDEATIL: (state, showDeatil) => {
      state.showDeatil = showDeatil
    }
  },
  actions: {
    CloseMenu({ commit }, showDeatil) {
      commit('SET_SHOWDEATIL', showDeatil)
    }
  },
  getters : {
    showDeatil: state => state.showDeatil,

  }
}

export default leftMenu
