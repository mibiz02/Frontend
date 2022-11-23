import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import { API_URL } from './api'
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
        idx: 0,
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
                    background-image: linear-gradient(0deg, rgba(166,34,195,1) 0%, rgba(253,45,77,1) 100%);`,
        movie_list: [],
        mbti_list: [],
        character_list: [],
        good_list: [],
        bad_list: [],
        movie: {},
        token: '',
        isLogin: false,
        comments: []
    },
    getters: {
        GET_MOVIE_LIST(state) {
            return state.movie_list
        },
        GET_COMMENTS(state) {
            return state.comments
        }
    },
    mutations: {
        SET_STYLE(state, payload) {
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
        CHANGE_PAGE(state, payload) {
            state.idx = payload;
        },
        SET_MOVIE_LIST(state, payload) {
            state.movie_list = payload
            console.log(state.movie_list)
        },
        SET_MBTI_LIST(state, payload) {
            state.mbti_list = payload
            console.log(state.mbti_list)
        },
        SET_CHARACTER_LIST(state, payload) {
            state.character_list = payload
        },
        SET_GOOD_LIST(state, payload) {
            state.good_list = payload
        },
        SET_BAD_LIST(state, payload) {
            state.bad_list = payload
        },
        SET_MOVIE_DATA(state, payload) {
            state.movie = payload
        },
        SIGN_UP(state, token) {
            state.token = token
        },
        SAVE_TOKEN(state, token) {
            state.token = token
        },
        GET_COMMENTS(state, payload) {
            state.comments = payload
        },
        ADD_COMMENTS(state, payload) {
            state
                .comments
                .push(payload.bubble)
        }
    },
    actions: {
        GET_MOVIE_LIST({commit}) {
            axios
                .get(`${API_URL}/movies`)
                .then(res => {
                    commit('SET_MOVIE_LIST', res.data)
                })
                .catch(err => console.log(err))
            },
        GET_MBTI_LIST({commit}) {
            axios
                .get(`${API_URL}/mbti_compabilities`)
                .then(res => {
                    commit('SET_MBTI_LIST', res.data)
                })
                .catch(err => console.log(err))
            },
        GET_CHARACTER_LIST({
            commit
        }, payload) {
            axios
                .get(`${API_URL}/mbti_compabilities/${payload}`)
                .then(res => {
                    commit('SET_CHARACTER_LIST', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            },
        GET_GOOD_LIST({
            commit
        }, payload) {
            axios
                .get(`${API_URL}/mbti_compabilities/type/${payload}/good`)
                .then(res => {
                    commit('SET_GOOD_LIST', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            },
        GET_BAD_LIST({
            commit
        }, payload) {
            axios
                .get(`${API_URL}/mbti_compabilities/type/${payload}/bad`)
                .then(res => {
                    commit('SET_BAD_LIST', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            },
        GET_MOVIE_DATA({
            commit
        }, payload) {
            axios
                .get(`${API_URL}/movies/${payload}`)
                .then(res => {
                    commit('SET_MOVIE_DATA', res.data)
                })
                .catch(err => console.log(err))
            },
        SIGN_UP(context, payload) {
            const {
                username,
                nickname,
                email,
                password1,
                password2,
                MBTI_type
            } = payload;

            axios({
                method: 'post',
                url: `${API_URL}/accounts/signup/`,
                data: {
                    username,
                    nickname,
                    email,
                    password1,
                    password2,
                    MBTI_type
                }
            })
                .then(res => {
                    context.commit('SIGN_UP', res.data.key)
                    window.location.href = 'http://localhost:8080/login'
                })
                .catch(err => console.log(err))
            },
        LOGIN(context, payload) {
            const {username, password} = payload

            axios({
                method: 'POST',
                url: `${API_URL}/accounts/login/`,
                data: {
                    username,
                    password
                }
            })
                .then(res => {
                    this.state.isLogin = true
                    context.commit('SAVE_TOKEN', res.data.key)
                    window.location.href = 'http://localhost:8080/'
                })
                .catch(err => console.log(err))
            },
        
    },
    modules: {},
    plugins: [createPersistedState()]
})
