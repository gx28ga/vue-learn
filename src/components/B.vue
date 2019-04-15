<template>
    <div>
        <div><button @click="refreshTrigger">trigger</button></div>
    </div>
</template>

<script>
import bus from "../bus";
export default {
    methods: {
        refreshTrigger() {
            bus.$emit("haha", "aye sir!");
        }
    }
};
</script>

<style>
</style>
