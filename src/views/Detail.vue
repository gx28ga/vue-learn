<template>

    <div class="detail">
        <Navbar :back="true">详情</Navbar>

        <div class="book">
            <div
                class="cover"
                :style="{backgroundImage:'url('+book.bookCover+')'}"
            ></div>
            <div class="info">
                <div class="name">
                    {{book.bookName}}
                </div>
                <div class="ad">{{book.bookInfo}}</div>
                <div class="price">￥ {{book.bookPrice}}</div>
            </div>
            <div
                class="edit"
                v-show="book===editBook"
            >
                <div>
                    书名<input
                        type="text"
                        v-model="book.bookName"
                    >
                </div>
                <div>
                    信息<input
                        type="text"
                        v-model="book.bookInfo"
                    >
                </div>
                <div>
                    价格<input
                        type="text"
                        v-model="book.bookPrice"
                    >
                </div>
            </div>
        </div>
        <div>
            <button
                v-show="!editBook"
                @click="edit(book)"
            >修改</button>
            <button
                v-show="book===editBook"
                @click="cancelEdit"
            >取消</button>
            <button
                v-show="book===editBook"
                @click="saveEdit()"
            >提交</button>
        </div>

    </div>
</template>

<script>
import Navbar from "./../components/Navbar";
import { getBookDetail, updateBook } from "./../api";

export default {
    name: "detail",
    created() {
        this.initDetail();
    },
    data() {
        return {
            editBook: "",
            book: {}
        };
    },
    computed: {
        bid() {
            return this.$route.params.bid;
        }
    },
    methods: {
        async initDetail() {
            this.book = await getBookDetail(this.bid);
            Object.keys(this.book).length > 0
                ? void 0
                : this.$router.push("/list");
        },
        edit(book) {
            this.editBook = book;
        },
        cancelEdit() {
            this.editBook = "";
        },
        async saveEdit() {
            let res = await updateBook(this.bid, this.book);
            if (res.code == 200) this.$router.push("/list");
            else alert("更新失败");
        }
    },
    components: {
        Navbar
    },
    watch: {
        $route() {
            this.initDetail();
        }
    }
};
</script>

<style lang="scss" scoped>
.detail {
    position: fixed;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    overflow: auto;
    z-index: 20;
}

.book {
    .cover {
        height: 200px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .name {
        margin-top: 0.5em;
        border-top: 1px solid #eee;

        font-size: 22px;
        font-weight: bold;
        padding: 0.5em;
    }

    .ad {
        font-size: 16px;
        color: #f06633;
        padding: 0.5em;
    }

    .price {
        padding: 0.5em;
        font-size: 18px;
        color: #ee0303;
    }
}
</style>