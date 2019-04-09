<template>
    <div>
        <!-- <div><input type="radio" value="A" v-model="gender">A</div>
        <div><input type="radio" value="B" v-model="gender">B</div> -->
        <!-- <div>
            <select v-model="selected">
                <option v-for="(fruit,index) in fruits" :key="index">{{fruit}}</option>
            </select>
        </div> -->
        <!-- <div><input type="checkbox" value="A"  v-model="multiple">A</div>
        <div><input type="checkbox" value="B" v-model="multiple">A</div>
        <div><input type="checkbox" value="C" v-model="multiple">B</div>
        {{multiple}} -->
        <div @click="parent">parent
            <div @click.once="child">child
                <div @click="grandson">grandson</div>
            </div>
            
        </div>
        <button @click="testBool=!testBool">click </button>

        <template v-if="testBool">
            <div class="col-sm-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ullam in! Accusantium obcaecati aliquid accusamus earum velit, ipsa at adipisci error ea perferendis eaque sit sint quaerat fugit maxime nobis.
                <input type="text">
            </div>
        </template>
        <template v-else>
            <div class="col-sm-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquam cupiditate eligendi autem quae veritatis, magni quasi cumque ducimus id ad exercitationem maiores quo, ullam porro ratione repudiandae, libero excepturi.
                <input type="text">
            </div>
        </template>

        <div @click="trig">{{m}}</div>
        
    </div>

</template>

<script>
export default {
    name:"demo",
    props:["m"],
    data(){
        return {
            testBool:true,
            multiple:[]
            // gender:"A",
            // fruits:["apple","pear","peach"],
            // selected:"apple"

        }
    },
    methods:{
        parent(){
            alert("parent")
        },
        child(){
            alert("child");
        },
        grandson(){
            alert("grandson")
        },
        trig(){
            this.$emit("hh",88888)
        }
    }

}
</script>

<style>

</style>

