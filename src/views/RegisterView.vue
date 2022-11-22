<template>
    <div class="sign">
        <SignNavBar/>
        <div class="container">
            <div class="__title">
                <h1>Register</h1>
                <h3>회원가입</h3>
            </div>
            <div class="__input_box">
                <input type="text" v-model="name" placeholder="id"/>
                <input type="text" v-model="email" placeholder="example@example.com"/>
                <p>비밀번호는 영문, 숫자, 특수문자를 조합하여 입력해주세요(8-16자) </p>
                <input type="text" v-model="password1" placeholder="비밀번호"/>
                <input type="text" v-model="password2" placeholder="비밀번호 확인"/>
                <input type="text" placeholder="MBTI" v-model="mbti"/>
            </div>
            <button type="submit" class="__sign_btn" @click="signUp">완료</button>
        </div>
    </div>
</template>

<script>
    import SignNavBar from '../layout/SignNavBar.vue'

    export default {
        name: 'registerView',
        components: {
            SignNavBar
        },
        data() {
            return {name: '', email: '', password1: '', password2: '', mbti: ''}
        },
        methods: {
            CheckEmail(email) {
                let reg_email = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/
                return (!reg_email.test(email))
                    ? true
                    : false;
            },
             CheckPassword(password) {
                // 비밀번호 형식 검사(영문, 숫자, 특수문자)
                const validatePassword = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/

                return (!validatePassword.test(password)) ? true : false;
             }, 
            signUp() {
                const username = this.name
                const email = this.email
                const password1 = this.password1
                const password2 = this.password2
                const mbti = this.mbti

                const payload = {
                    username,
                    email,
                    password1,
                    password2,
                    mbti
                }

                if (Object.values(payload).includes('')) {
                    alert('빈 칸이 있습니다');
                } else if (this.CheckEmail(email)) {
                    alert('이메일 양식을 지켜주세요')
                } else if (password1 !== password2) {
                    alert('비밀번호와 비밀번호 확인이 다릅니다');
                } else if (this.CheckPassword(password1)) {
                    alert('비밀번호는 영문, 숫자, 특수문자를 조합하여 입력해주세요(8-16자)')
                } else {
                    this
                        .$store
                        .dispatch('SIGN_UP', payload)
                }
            }
        }

    }
</script>

<style>
    @import '../css/Sign.css';
</style>