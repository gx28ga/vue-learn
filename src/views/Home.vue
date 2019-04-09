<template>
    <div class="content">
       <Swiper></Swiper>
    </div>
</template>

<script>

import Swiper from "./../components/Swiper";

export default {    
    name: "home",
    data() {
        return {
         
        };
    },
    methods:{
        

    },
    components: {
        Swiper
    },
    
};
</script>

<style>
 .swiper-container{
     height: 150px;
 }
</style>
