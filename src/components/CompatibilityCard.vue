<template>
    <li>
        <div class="profile">
            <h2 class="profile__name">
                <div>
                    {{item.character_name}}
                </div>
                <div class="__mbti" :style="getStyle">
                    {{item.character_MBTI_type}}
                </div>
            </h2>
            <p>{{item.original_movie_title}}</p>
            <img :alt="item.character_name" :src="item.character_img_path"/>
        </div>
    </li>
</template>

<script>
    import {mbtiStyle} from '@/store/api'

    export default {
        props: {
            item: Object
        },
        computed: {
            getStyle() {
                return mbtiStyle(this.item.character_MBTI_type)
            }
        }
    }
</script>

<style></style>