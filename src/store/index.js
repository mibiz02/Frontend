import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type_mbti : {
      0:{
        name : "분석가형",
        mbti : ["INTJ", "INTP", "ENTJ", "ENTP"]
      },
      1:{
        name : "외교관형",
        mbti : ["INFJ", "INFP", "ENFJ", "ENFP"]
      },
      2:{
        name : "관리자형",
        mbti : ["ISTJ", "ISFJ", "ESTJ", "ESFP"]
      },
      3:{
        name : "탐험가형",
        mbti : ["ISTP", "ISFP", "ESTP", "ESFP"]
      },
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
