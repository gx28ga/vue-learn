<template>
    <div>
        <div> receive</div>

    </div>
</template>

<script>
import bus from "../bus";

export default {
    mounted() {
        bus.$on("haha", data => {
            this.print(data);
        });
    },
    methods: {
        print(data) {
            alert(data);
        }
    },
    components: {}
};
</script>

<style>
</style>
