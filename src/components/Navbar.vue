<template>
    <div>
        <div class="navbar">
            <div class="back fl" v-if="back" @click="goBack">
                返回
            </div>

            <div class="title">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"navbar",
    props:{
        back:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        goBack(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar{
        background-color: #ffffff;
        border-bottom: 1px solid #eee;
        position: fixed;
        z-index: 10;
        height: 44px;
        line-height: 44px;
        width: 100%;
        left: 0;
        top: 0;
        text-align: center;
        .title{
            position: absolute;
            height: 44px;
            
            left: 40px;
            right: 40px;
        }
        .back{
            width: 40px;
            height: 100%;
        }
    }

</style>
