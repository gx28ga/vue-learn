<template>
    <div class="bar-tab">
        <router-link to="/home" class="item">
            <span >
                首页
            </span>
        </router-link>
        <router-link to="/list" class="item">
            <span >
                列表
            </span>
        </router-link>
        <router-link to="/collect" class="item">
            <span >
                收藏
            </span>
        </router-link>
        <router-link to="/add" class="item">
            <span >
                添加
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"bar-tab"
}
</script>

<style lang="scss" scoped>
    .router-link-active{
        color: #ee9899;
    }

    .bar-tab{
        background-color: #ffffff;
        position: fixed;
        z-index: 10;
        bottom: 0;
        left: 0;
        height: 50px;
        width: 100%;
        display: flex;
        border-top: 1px solid #eee;
        .item{
            flex:1;
            text-align: center;
            padding: 1em;
        }
      
    }
    
</style>
