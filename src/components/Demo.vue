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
        
    </div>

</template>

<script>
export default {
    name:"demo",
    data(){
        return {
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
        }
    }

}
</script>

<style>

</style>

