<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <table class="table table-striped table-hover">
                    <caption class="h2">购物车</caption>
                    <thead>
                        <tr>
                            <th>全选 <input type="checkbox" v-model="allChecked" ></th>
                            <th>商品</th>
                            <th>单价</th>
                            <th>数量</th>
                            <th>小计</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key=index>
                            <td><input type="checkbox" v-model="product.isSelected"></td>
                            <td>
                                <img :src="product.productCover" :title="product.productName" :alt="product.productName">
                                {{product.productName}}
                            </td>
                            <td><span>￥</span>product.productPrice</td>
                            <td></td>
                            <td>{{product.productPrice*product.productCount | toFixed}}</td>
                            <td><button class="btn btn-danger btn-xs">删除</button></td>

                        </tr>
                    </tbody>
                </table>

            </div>
            
        </div>
        
    </div>
</template>

<script>
import data from "./../../static/cart.json";

export default {
    name:"cart",
    created(){
        this.products=data.list;

    },
    data(){
        return {
            products:[],
            checkAll:false,
            testBool:true
        }
    },
    filters:{
        toFixed(value){
            return value.toFixed(2);
        },
        check(value){
            alert(value);
        }

    },
    computed:{
        allChecked:{
            set(value){
                this.products.forEach(product => {
                    product.isSelected=value;
                });

            },
            get(){
                return this.products.every((product)=>{
                    return product.isSelected===true;
                })

            }
        }
    }

}
</script>

<style>

</style>
