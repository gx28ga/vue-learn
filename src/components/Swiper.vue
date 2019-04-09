<template>
     <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            
            <swiper-slide v-for="(slide, index) in slides" :key="index">I'm Slide {{slide}}</swiper-slide>
            

            
        </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    
    data(){
        return {
            swiperOption:{
                autoplay:true
            },
            slides:[1,2,3,4,5]

        }
    },
    components:{
        swiper, swiperSlide
        
    },
    methods:{
        callback(){

        }
    }
}
</script>

<style>

</style>
