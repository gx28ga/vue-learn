<template>
    <div>
        <Navbar>购物车</Navbar>
        <div class="content">
            <ul>
                <li
                    class="book"
                    v-for="item in cartList"
                    :key="item.bookId"
                >
                    <div
                        class="cover"
                        :style="{backgroundImage:'url('+item.bookCover+')'}"
                    ></div>
                    <div class="info">
                        <div class="name">{{item.bookName}}</div>

                        <div class="price">￥ <span>{{item.bookPrice}}</span></div>
                        <div class="count">
                            <button @click="add(item)">加</button>
                            <input
                                type="number"
                                v-model="item.bookCount"
                                @blur="modify(item)"
                            >

                            <button @click="reduce(item)">减</button>
                            <button @click="remove(item)">删除</button>
                        </div>
                    </div>
                </li>
                <li>共{{count}}本</li> <button @click="clear">清空购物车</button>
            </ul>
        </div>

    </div>
</template>

<script>
import Navbar from "./../components/Navbar";
import { mapState, mapGetters, mapMutations } from "vuex";
import * as Types from "./../store/mutations-type";
export default {
    computed: {
        ...mapState(["cartList"]),
        ...mapGetters(["count"])
    },

    methods: {
        ...mapMutations({
            add: Types.CART_ADD,
            remove: Types.CART_DELETE,
            reduce: Types.CART_REDUCE,
            modify: Types.CART_CHANGE,
            clear: Types.CART_CLEAR
        })
        // fn(arr){
        //     arr.map((item, index,arr) =>{
        //         let str="、"
        //         index<arr.length-1? void 0: str="";
        //         return h(`span`,item==="1"?`本人${str}`:item=="2"?`上级${str}`:`角色负责人${str}`)
        //     })

        // }
    },
    components: {
        Navbar
    }
};
</script>

<style lang="scss" scoped>
.book {
    display: flex;
    padding: 10px;
    .cover {
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        border: 1px solid #eee;
    }
    .info {
        flex: 1;
        padding: 0 10px;
        .name {
            font-size: 16px;
            margin-bottom: 1em;
        }
        .price {
            color: #ee3311;
            margin-bottom: 4px;
        }
        .count {
            color: #666;
        }
    }
}
</style>
