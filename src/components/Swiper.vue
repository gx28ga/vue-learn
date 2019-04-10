<template>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <swiper-slide 
            v-for="(slide, index) in source" 
            :key="index"
            :style="{backgroundImage:'url('+slide+')'}"> </swiper-slide>
    </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
    created() {
        // this.axios.get("api/slides").then(res=>{
        //     console.log(res.data);
        // })
    },

    data() {
        return {
            swiperOption: {
                autoplay: true
            },
            slides: [1, 2, 3, 4, 5]
        };
    },
    props: ["source"],
    components: {
        swiper,
        swiperSlide
    },
    methods: {
        callback() {}
    }
};
</script>

<style>
</style>
