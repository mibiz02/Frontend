import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mbti: '',
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
        movie : {}
        token: ''
    },
    getters: {},
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
        SET_MBTI(state, payload) {
            state.mbti = payload
        },
        SET_MOVIE_LIST(state, payload) {
            state.movie_list = payload
        },
        SET_MBTI_LIST(state, payload) {
            state.mbti_list = payload
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
        SIGN_UP(state, token) {
            state.token = token
        },
        SAVE_TOKEN(state, token) {
            state.token = token
        }
    },
    actions: {
        GET_MOVIE_LIST({commit}) {
            axios
                .get(`${API_URL}/movies`)
                .then(res => {
                    res
                        .data
                        .forEach(el => {
                            el.genre_name = el
                                .genre_name
                                .split(',')
                                .slice(0, -1)
                        });

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
        GET_MOVIE_DATA({commit}, payload) {
            axios
                .get(`${API_URL}/movies/${payload}`)
                .then(res => {
                    res
                        .data
                        .forEach(el => {
                            el.genre_name = el
                                .genre_name
                                .split(',')
                                .slice(0, -1)
                        });

                    commit('SET_MOVIE_DATA', res.data)
                })
                .catch(err => console.log(err))
            }
        SIGN_UP(context, payload) {
            const {username, email, password1, password2} = payload;

            axios({
                method: 'post',
                url: `${API_URL}/accounts/signup/`,
                data: {
                    username,
                    email,
                    password1,
                    password2
                }
            })
            .then(res => {
                context.commit('SIGN_UP', res.data.key)
            })
            .catch(err => console.log(err))
        },
        LOGIN(context, payload) {
            const {email, password} = payload

            console.log(email, password)

            axios({
                method:'POST',
                url:`${API_URL}/accounts/login/`,
                data: {
                    email, password
                }
            }).then(res => {
                context.commit('SAVE_TOKEN', res.data.key)
            }).catch(err => console.log(err))
        }
    },
    modules: {},
    plugins: [createPersistedState()]
})
