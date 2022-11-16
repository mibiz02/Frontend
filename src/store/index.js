import Vue from 'vue'
import Vuex from 'vuex'
import {intj, intp, entj, entp, infj, infp, enfj, enfp, istj, isfj, estj, esfj, istp, isfp, estp, esfp} from './mbtis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type_mbti : [
      {
        name : "분석가형",
        mbti : [intj, intp, entj, entp]
      },
      {
        name : "외교관형",
        mbti : [infj, infp, enfj, enfp]
      },
      {
        name : "관리자형",
        mbti : [istj, isfj, estj, esfj]
      },
      {
        name : "탐험가형",
        mbti : [istp, isfp, estp, esfp]
      },
    ]
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
