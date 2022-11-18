<template>
    <div class="sign">
        <SignNavBar/>
        <div class="container">
            <div class="__title">
                <h1>Login</h1>
                <h3>로그인</h3>
            </div>
            <div class="__input_box">
                <input type="text" placeholder="example@example.com"/>
                <input type="text" placeholder="비밀번호"/>
            </div>
            <div id="__login_box">
                <button class="__sign_btn">완료</button>
                <router-link to="/register">아직 회원이 아니신가요?</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import SignNavBar from '../layout/SignNavBar.vue'

    export default {name: 'loginView', components: {
            SignNavBar
        }}
</script>

<style>
    @import '../css/Sign.css';
</style>