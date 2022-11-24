<template>
    <div class="sign">
        <SignNavBar/>
        <div class="container">
            <div class="__title">
                <h1>Login</h1>
                <h3>로그인</h3>
            </div>
            <div class="__input_box">
                <input type="text" placeholder="id" @input="getUserName"/>
                <input type="password" placeholder="비밀번호" @input="getPassword"/>
            </div>
            <div id="__login_box">
                <button class="__sign_btn" @click="logIn">완료</button>
                <router-link to="/register">아직 회원이 아니신가요?</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import SignNavBar from '../layout/SignNavBar.vue'

    export default {
        name: 'loginView',
        components: {
            SignNavBar
        },
        data() {
            return {
                username : '',
                password : ''
            }
        },
        methods : {
            getUserName(e) {
                this.username = e.target.value
            },
            getPassword(e) {
                this.password = e.target.value
            },
            logIn() {
                const username = this.username
                const password = this.password

                const payload = {
                    username, password
                }

                this.$store.dispatch('LOGIN', payload)
            }
        }
    }
</script>

<style>
    @import '../css/Sign.css';
</style>