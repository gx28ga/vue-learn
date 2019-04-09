<template>
    <div id="app">
        
        <Navbar>首页</Navbar>

        <Tab></Tab>
        <router-view/>
    </div>
</template>

<script>


import Navbar from "./components/Navbar";
import Tab from "./components/Tab";


export default {
    name: "app",
    created() {},
    data() {
        return {};
    },
    components: {
        Tab,
        Navbar
    },
    methods: {}
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
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



.fl{
    float: left;
}

.fr{
    float: right;
}
.content{
    padding-top: 44px;padding-bottom: 50px;
}
</style>

