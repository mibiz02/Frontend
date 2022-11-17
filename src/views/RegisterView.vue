<template>
  <div class="sign">
    <SignNavBar />
        <div class="container">
            <div class="__title">
                <h1>Register</h1>
                <h3>회원가입</h3>
            </div>
            <div class="__input_box">
                <input type="text"  placeholder="닉네임"/>
                <input type="text"  placeholder="example@example.com"/>
                <input type="text"  placeholder="비밀번호"/>
                <input type="text"  placeholder="비밀번호 확인"/>
                <input type="text"  placeholder="MBTI"/>
            </div>
            <button class="__sign_btn">완료</button>
        </div>
  </div>
</template>

<script>
import SignNavBar from '../layout/SignNavBar.vue'

export default {
    name:'registerView',
    components:{
        SignNavBar
    }

}
</script>

<style>
@import '../css/Sign.css';
</style>