<template>
    <div>
        <Navbar>首页</Navbar>
        <div class="content">
            
        <Swiper :source=slides></Swiper>
        <ul class="hot-books">
            <li v-for="book in hotBooks" :key="book.bookId" class="book">
                <div class="cover" :style="{backgroundImage:'url('+book.bookCover+')'}"></div>
                    <div class="name">{{book.bookName}}</div>
                
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import Navbar from "./../components/Navbar";
import Swiper from "./../components/Swiper";

import { getSlides, getHotBooks } from "../api";

export default {
    created(){
        this.initSlides();
        this.initHotBooks();

    }, 
    name: "home",
    data() {
        return {
            slides:[],
            hotBooks:[],
        };
    },
    methods:{
        async initSlides(){
            this.slides= await getSlides();
        },
        async initHotBooks(){
            this.hotBooks=await getHotBooks();
        }
    },
    components: {
        Navbar,Swiper
    },
    
};
</script>

<style lang="scss" scoped>
 .swiper-container{
     height: 150px;
 }
 .swiper-slide{
     background-size: cover;
 }

 .hot-books{
     display: flex;
     flex-wrap: wrap;
     .book{
         flex-basis: 50%;
         
         padding: 10px  ;
         .cover{
             height:120px;
             background-position: center;
             background-size:contain;
             margin-bottom: 10px;
         }
         .name{
             font-size: 14px;
         }

     }
 }
</style>
