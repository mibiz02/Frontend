<template>
  <div class="sign">
    <SignNavBar />
        <div class="container">
            <div class="__title">
                <h1>Register</h1>
                <h3>회원가입</h3>
            </div>
            <div class="__input_box">
                <input type="text" v-model="name" placeholder="닉네임" />
                <input type="text" v-model="email" placeholder="example@example.com" />
                <input type="text" v-model="password1" placeholder="비밀번호" />
                <input type="text" v-model="password2" placeholder="비밀번호 확인" />
                <!-- <input type="text"  placeholder="MBTI" @input="getMbti"/> -->
            </div>
            <button type="submit" class="__sign_btn" @click="signUp">완료</button>
        </div>
  </div>
</template>

<script>
import SignNavBar from '../layout/SignNavBar.vue'

export default {
    name:'registerView',
    components:{
        SignNavBar
    },
    data() {
        return {
            name : '',
            email : '',
            password1 : '',
            password2 : '',
            mbti : ''
        }
    },
    methods : {
        signUp() {
            const username = this.name
            const email = this.email
            const password1 = this.password1
            const password2 = this.password2
            // const mbti = this.mbti

            const payload = {username, email, password1, password2}

            console.log(payload)

            this.$store.dispatch('SIGN_UP', payload)
        }
    }

}
</script>

<style>
@import '../css/Sign.css';
</style>