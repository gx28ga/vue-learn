<template>
    <div>
        <h1>{{msg}}</h1>
        <div><input type="text" v-model="mInput"></div>
    </div>
</template>

<script>
export default {
    name:"home",
    data(){
        return {
            msg:"abc",
            mInput:"yes yes yes yes yes"
        }
    }
}
</script>

<style>

</style>
