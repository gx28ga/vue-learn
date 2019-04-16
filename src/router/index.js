import Vue from 'vue';
import VueRouter from "vue-router";

import Detail from "./../views/Detail"


Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        component: () => import("./../views/Home"),
        meta: { keepAlive: true }
    },
    {
        path: "/add",
        component: () => import("./../views/Add")
    },
    {
        path: "/collect",
        component: () => import("./../views/Collect")
    },
    {
        path: "/list",
        component: () => import("./../views/List")
    },
    {
        name: "detail", path: "/detail/:bid",
        component: Detail
    },
    { path: "", redirect: "/home" }
]



export default new VueRouter({

    routes
}) 