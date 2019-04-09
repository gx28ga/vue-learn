<template>
    <div></div>
</template>

<script>



let ComponentA={
    template:"<div>{{color}} <button>变绿</button></div>",
    data(){
        return {
            color:"绿色",
            old:"绿色"
        }
    },
    created(){
        this.$on("changeRed",(val)=>{
            alert(val);
            this.color=val;
        })
    }
}
let ComponentB={
    template:"<div>{{color}} <button @click='change'>变红</button></div>",
    data(){
        return {
            color:"红色",
            old:"红色"
        }
    },
    methods:{
        change(){
            this.$emit("changeRed",this.old);
        }
    }
}

export default {
    name:"EventBus",
    components:{
        ComponentA,ComponentB
    }

}
</script>

<style>

</style>
