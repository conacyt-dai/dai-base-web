import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasMainNav: true,
    openMainNav: false,
    openGobNav: false,
    hasA11yMenu: true,
    openA11yMenu: false,
    alto_contraste: false,
    vista_simplificada: false,
    enlaces_subrayados: false,

    nombre_eni: 'nombre_eni_var_store',
  },
  getters: {
    hasMainNav(state) {
      return state.hasMainNav;
    },
    isOpenMainNav(state) {
      return state.openMainNav;
    },
    isOpenGobNav(state) {
      return state.openGobNav;
    },
    hasA11yMenu(state) {
      return state.hasA11yMenu;
    },
    isOpenA11yMenu(state) {
      return state.openA11yMenu;
    },
    tieneAltoContraste(state) {
      return state.alto_contraste;
    },
    tieneVistaSimplificada(state) {
      return state.vista_simplificada;
    },
    tieneEnlacesSubrayados(state) {
      return state.enlaces_subrayados;
    },

    obtenerNombreEni(state) {
      return state.nombre_eni;
    },
  },
  mutations: {
    openMainNav(state) {
      state.openMainNav = true;
    },
    closeMainNav(state) {
      state.openMainNav = false;
    },
    toggleMainNav(state) {
      state.openMainNav = !state.openMainNav;
    },
    openGobNav(state) {
      state.openGobNav = true;
    },
    closeGobNav(state) {
      state.openGobNav = false;
    },
    toggleGobNav(state) {
      state.openGobNav = !state.openGobNav;
    },
    toggleA11yMenu(state) {
      state.openA11yMenu = !state.openA11yMenu;
    },
    alternarAltoContraste(state) {
      state.alto_contraste = !state.alto_contraste;
    },
    quitarAltoContraste(state) {
      state.alto_contraste = false;
    },
    alternarVistaSimplificada(state) {
      state.vista_simplificada = !state.vista_simplificada;
    },
    quitarVistaSimplificada(state) {
      state.vista_simplificada = false;
    },
    alternarEnlacesSubrayados(state) {
      state.enlaces_subrayados = !state.enlaces_subrayados;
    },
    quitarEnlacesSubrayados(state) {
      state.enlaces_subrayados = false;
    },
  },
  actions: {
  },
  modules: {
  },
});
