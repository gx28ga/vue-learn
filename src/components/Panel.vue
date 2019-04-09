<template>
    <div class="panel" :class="panelColor">
        <div class="panel-heading" ref="head" @click="alertTitle">
            <slot name="title">{{color}}</slot>
        </div>
        <div class="panel-body">
            <slot name="body"></slot>
        </div>
        <div class="panel-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Panel",
    props: {
        color: {
            type: [String],
            default: "default"
        }
    },
    computed: {
        panelColor() {
            return "panel-" + this.color;
        }
    },
    methods:{
        alertTitle(){
            
            this.$emit("haha",this.$refs.head.innerHTML)
        }
    }
};
</script>

<style>
</style>
