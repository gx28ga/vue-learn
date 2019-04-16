<template>
    <div id="app">

        <Tab></Tab>
        <!-- <keep-alive>
            <router-view v-if="$route.meta.keepAlive">
            </router-view>

        </keep-alive> -->
        <router-view>

        </router-view>

    </div>
</template>

<script>
import Tab from "./components/Tab";

export default {
    name: "app",
    created() {},
    data() {
        return {};
    },
    components: {
        Tab
    },
    methods: {}
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    color: #333333;
}
ul,
li {
    list-style: none;
}
a {
    text-decoration: none;
}
input,
button {
    appearance: none;
}

.fl {
    float: left;
}

.fr {
    float: right;
}
.content {
    padding-top: 44px;
    padding-bottom: 50px;
}
</style>

