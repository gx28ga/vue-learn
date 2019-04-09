import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../views/Home";
import Add from "../views/Add";
import Collect from "../views/Collect";
import List from "../views/List";
import Detail from "../views/Detail";



const routes = [
    {path:"/home",component:Home},
    {path:"/add",component:Add},
    {path:"/collect",component:Collect},
    {path:"/list",component:List},
    {path:"/detail",component:Detail},
]



export default new VueRouter({
    
    routes 
}) 