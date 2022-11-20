<template>
    <div id="compatibility-page" class="container">
        <img :src="imgUrl" :alt="this.mbti"/>
        <h1 :style="style">{{this.mbti}}</h1>
        <h2>{{name}}</h2>
        <p>{{explain}}</p>
    </div>
</template>

<script>
    import {mbtiStyle} from '../store/api.js';

    export default {
        name: 'CompatibilityTop',
        data() {
            return {
                mbti: this.$store.state.mbti,
            }
        },
        computed: {
            style() {
                return mbtiStyle(this.mbti)
            },
            imgUrl() {
                return require(`../assets/mbti/${this.mbti.toLowerCase()}.png`)
            },
            name() {
                let name = ''

                switch (this.mbti) {
                    case 'INTJ':
                        name = '전략가'
                        break;
                    case 'INTP':
                        name = '논리술사'
                        break;
                    case 'ENTJ':
                        name = '통솔자'
                        break;
                    case 'ENTP':
                        name = '변론가'
                        break;
                    case 'INFJ':
                        name = '옹호자'
                        break;
                    case 'INFP':
                        name = '중재자'
                        break;
                    case 'ENFJ':
                        name = '선도자'
                        break;
                    case 'ENFP':
                        name = '활동가'
                        break;
                    case 'ISTJ':
                        name = '현실주의자'
                        break;
                    case 'ISFJ':
                        name = '수호자'
                        break;
                    case 'ESTJ':
                        name = '경영자'
                        break;
                    case 'ESFJ':
                        name = '집정관'
                        break;
                    case 'ISTP':
                        name = '장인'
                        break;
                    case 'ISFP':
                        name = '모험가'
                        break;
                    case 'ESTP':
                        name = '사업가'
                        break;
                    case 'ESFP':
                        name = '연예인'
                        break;
                }
                
                return name
            },
            explain() {
                let explain = ''

                switch (this.mbti) {
                    case 'INTJ':
                        explain = '모든 일에 대해 계획을 세우며 상상력이 풍부한 전략가입니다.'
                        break;
                    case 'INTP':
                        explain = '지식을 끝없이 갈망하는 혁신적인 발명가입니다.'
                        break;
                    case 'ENTJ':
                        explain = '항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다.'
                        break;
                    case 'ENTP':
                        explain = '지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다.'
                        break;
                    case 'INFJ':
                        explain = '차분하고 신비한 분위기를 풍기는 성격으로, 다른 사람에게 의욕을 불어넣는 이상주의자입니다.'
                        break;
                    case 'INFP':
                        explain = '항상 선을 행할 준비가 되어 있는 부드럽고 친절한 이타주의자입니다.'
                        break;
                    case 'ENFJ':
                        explain = '청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는 지도자입니다.'
                        break;
                    case 'ENFP':
                        explain = '열정적이고 창의적인 성격으로, 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼입니다.'
                        break;
                    case 'ISTJ':
                        explain = '사실을 중시하는 믿음직한 현실주의자입니다.'
                        break;
                    case 'ISFJ':
                        explain = '주변 사람을 보호할 준비가 되어 있는 헌신적이고 따뜻한 수호자입니다.'
                        break;
                    case 'ESTJ':
                        explain = '사물과 사람을 관리하는 데 뛰어난 능력을 지닌 경영자입니다.'
                        break;
                    case 'ESFJ':
                        explain = '배려심이 넘치고 항상 다른 사람을 도울 준비가 되어 있는 성격으로, 인기가 많고 사교성 높은 마당발입니다.'
                        break;
                    case 'ISTP':
                        explain = '대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다.'
                        break;
                    case 'ISFP':
                        explain = '항상 새로운 경험을 추구하는 유연하고 매력 넘치는 예술가입니다.'
                        break;
                    case 'ESTP':
                        explain = '위험을 기꺼이 감수하는 성격으로, 영리하고 에너지 넘치며 관찰력이 뛰어난 사업가입니다.'
                        break;
                    case 'ESFP':
                        explain = '즉흥적이고 넘치는 에너지와 열정으로 주변 사람을 즐겁게 하는 연예인입니다.'
                        break;
                }
                return explain
            }
        },
        methods: {}
    }
</script>

<style>
    @import '../css/CompatibilityTop.css';
</style>