<h1>🎥 Mbti 영화 추천 서비스, MOBIZ 🎥</h1>

<br />

# 🎬 서비스 소개
영화 캐릭터의 MBTI를 통해 나와 같은 MBTI를 가진 인물이 등장하는 영화를 추천하는 서비스

### 🔗목표와 실제 구현 정도
- [x] 사용자가 원하는 MBTI의 영화 인물들 추천
- [x] 선택한 MBTI와 좋은/나쁜 궁합의 영화 인물들 추천
- [x] MBTI 검사 사이트를 연결하여 사용자의 UX적 경험을 증대
- [x] 영화를 좋아하는 사람들 또는 MBTI에 흥미있는 사람들끼리 소통할 수 있는 기회 제공
- [x] 좋아요 표시한 영화와 자신이 쓴 댓글들을 모아볼 수 있는 마이페이지

#### -> 모두 
<br />


# 🤗 멤버
#### [이효진](#https://github.com/C12H22O12) - 프론트엔드 / [원정아](#https://github.com/ja1234321) - 백엔드

<br />

# ⚙️ 기술스택 및 역할분담


### ✨공통
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/nontion-000000?style=for-the-badge&logo=notion&logoColor=white">

### ✨프론트엔드
<img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

1. 화면 설계 및 구성
2. Vue 구조 설계
3. Vue 개발 및 BE와 통신


### ✨백엔드
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
<img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=Sqlite&logoColor=white"/>
<img src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white"/>


1. Web Crawl 및 DB 구성
2. django 설계
3. 알고리즘 추천 기능 구성


# 🎇 핵심 기능
### 🐥 화면 구조 설계
- **assets** : 이미지 파일을 저장하는 폴더
- **store** : vuex 스토어 뿐만 아니라 전역적으로 사용하는 함수나 변수를 저장하는 폴더
- **router** : vue-router index.js를 가지고 있는 폴더
- **css** : 각 컴포넌트가 갖는 css파일을 저장하는 폴더
- **components** : 가장 작은 화면 구성 단위를 가지고 있는 폴더
- **layout** : components폴더 안 component의 집합들, 화면을 구성하되 화면 전체를 가지지는 않음
- **views** : 화면 단위의 컴포넌트


### 📊 알고리즘 추천 기능
+ ManyToManyField 를 활용해 MBTI 궁합간의 매칭을 테이블로 제작
+ 특정 MBTI 문자가 주어질 때, 위 테이블을 이용해 반복문을 통한 조건 중첩한 Q() 작성
+ 위의 Q를 filter로 조작해, 궁합에 맞는 캐릭터 및 영화를 제시 및 추천
### 🖥️ 데이터베이스 모델링(ERD)
+ **accounts**, **movies**, **mbti_compabilities** 3개의 application으로 구성
+ ![](https://i.imgur.com/QhEyA0M.png)


### 🔍 서비스 대표 기능
- Loading&Main
    - MBTI 정보, 영화 속 캐릭터, 영화들을 카드로 보여주기
![](https://i.imgur.com/WslSJYW.jpg)

- Compability
    - 선택한 MBTI를 가지는 캐릭터들이 나오는 영화 추천
    - MBTI 좋은 궁합/나쁜 궁합 캐릭터 보여주기
![](https://i.imgur.com/0wWqsSc.jpg)


- Movie
    - 선택한 영화의 상세 정보를 보여주기
    - 해당 영화에 등장하는 캐릭터들과 그의 MBTI, 이름을 보여주기
![](https://i.imgur.com/9v0Gz9v.jpg)


- SignUp/Login
    - 로그인 기능/회원가입 기능
    - 회원가입시, MBTI와 닉네임을 함께 기입해 가입
    - 아이디와 비밀번호로 로그인
![](https://i.imgur.com/8sJ7AL5.png)
![](https://i.imgur.com/B3gr2sU.png)


- Mypage
    - 로그인을 해야 접근가능한 페이지로, 회원의 이메일, 아이디, 닉네임, MBTI 타입을 보여주기
    - 회원이 좋아요한 영화들을 보여주기
    - 회원이 작성한 영화 댓글들과 MBTI 토론장 댓글들을 보여주기
![](https://i.imgur.com/VtE2XTu.png)




### ✍ 기타(후기, 느낀점)
+ RESTful한 API를 위한 CRUD 기능을 부분적으로 완성함에 아쉬움을 느꼈다. DB와 상호작용하는 기능이 화면에서 사용하지 못하는 아쉬움이 있지만, 커뮤니티 기능의 필수적인 Create와 Read 기능을 완전히 구현함에 따라 해당 웹이 보유한 소재와 더불어 좋은 커뮤니티로 기능할 수 있으리라 생각한다.
+ django-allauth와 dj-rest-auth나 selenium과 같은 library를 이용하며 편리함과 강력함을 느끼는 동시에 편의에 맞춰 override를 시도하는 일에 큰 어려움을 느꼈다. 프레임워크를 사용하며 코드를 쓰는데에서 만족하지말고, 코드 한 줄이 어떤 의미를 갖는지, 어떤 원리로 동작하는지 의미를 파악하는데 집중해야겠다.
+ 상세한 기획의 중요성을 느꼈다. 구현한 기능 중 대부분은 BDD와 SDD의 방법론을 통해 정의해 수월하게 작성되었지만, 개발 도중 추가한 기능을 구현하기 위해 DB와 ERD를 재구성하는 일이 몇 번 있었다. 기획시 아주 상세한 상황을 염두하며 개발해야겠다. 
+ flickity 라이브러리의 치명적인 단점이 있었다. 동적인 데이터를 넣으면 작동하지 않는다는 것이 그 이유였다. 그러나 서버와 통신하는 데이터의 특성상 동적일 수 밖에 없었다. 미리 호출하고 vuex state에 저장 후 그 값을 getter로 가져오는 방식을 통해 문제를 해결할 수 있었다. 특히 메인의 경우 로딩 화면을 따로 구성하여 문제를 해결하였다.

 
<br />

# 🎈 Figjam
https://www.figma.com/file/yazPCuFZAQCiFWO3wRFkJi/MIBIZ?node-id=211%3A632&t=dE6vnDEQlEfpn2jq-0

# 📑 Notion
https://www.notion.so/MIBIZ-MBTI-c2ec7afaa27649bf8fb37eb61dce32d4
