import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {
    intj,
    intp,
    entj,
    entp,
    infj,
    infp,
    enfj,
    enfp,
    istj,
    isfj,
    estj,
    esfj,
    istp,
    isfp,
    estp,
    esfp
} from './mbtis'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mbti: '',
        type_mbti: [
            {
                name: "분석가형",
                mbti: [intj, intp, entj, entp]
            }, {
                name: "외교관형",
                mbti: [infj, infp, enfj, enfp]
            }, {
                name: "관리자형",
                mbti: [istj, isfj, estj, esfj]
            }, {
                name: "탐험가형",
                mbti: [istp, isfp, estp, esfp]
            }
        ],
        mbti_style: `background-image: rgb(166,34,195);
        background-image: linear-gradient(0deg, rgba(166,34,195,1) 0%, rgba(253,45,77,1) 100%);`
    },
    getters: {},
    mutations: {
        setStyle(state, payload) {
            let style = ''

            switch (payload) {
                case 0:
                    style = `background-image: rgb(166,34,195);
                    background-image: linear-gradient(0deg, rgba(166,34,195,1) 0%, rgba(253,45,77,1) 100%);`
                    break;
                case 1:
                    style = `background-image: rgb(34,193,195);
                    background-image: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);`
                    break;
                case 2:
                    style = `background-image: rgb(34,195,161);
                    background-image: linear-gradient(0deg, rgba(34,195,161,1) 0%, rgba(45,115,253,1) 100%)`;
                    break;
                case 3:
                    style = `background-image: rgb(232,119,52);
                    background-image: linear-gradient(0deg, rgba(232,119,52,1) 0%, rgba(253,191,45,1) 100%);`
                    break;
            }

            state.mbti_style = style
        },
        setMbti(state, payload) {
            state.mbti = payload
        }
    },
    actions: {},
    modules: {},
    plugins: [
        createPersistedState()
    ]
})
