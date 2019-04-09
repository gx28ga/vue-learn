<template>
    <div id="app">
        <EventBus></EventBus>
        
    </div>
</template>

<script>
import EventBus from "./components/EventBus";

export default {
    name: "app",
    data() {
        return {
            color: "danger"
        };
    },
    components: {
        EventBus
    },
    methods: {
        
    }
};
</script>

<style>
</style>
