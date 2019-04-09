<template>
     <div>
        <input type="radio" v-model="radio" value="home"> home
        <input type="radio" v-model="radio" value="list"> list
        <component :is="radio"></component>
     </div>
     
</template>

<script>
export default {
    name:"Modal",
    props:["show"],
    methods:{
        close(){
            this.$emit('update:show', false)
        }
    },
    components:{
        "home":{
            template:"<h1>home</h1>"
        },
        "list":{
            template:"<h1>list</h1>"
        }
    },
    data(){
        return {
            radio:"home"
        }
    }
}
</script>

<style>
.mask{width: 100%;height: 100%;position: fixed;background-color: rgba(0,0,0,.3);top: 0;left: 0;}
.modal{width: 400px;height: 150px;background-color: #ffffff;position: fixed;left: 50%;top: 50%;transform: translate3d(-50%,-50%,0)}

</style>
