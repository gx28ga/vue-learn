<template>
    <div>
        <div><input
                type="text"
                v-model="book.bookCover"
            >封面</div>
        <div><input
                type="text"
                v-model="book.bookName"
            >名称</div>
        <div><input
                type="text"
                v-model="book.bookInfo"
            >信息</div>
        <div><input
                type="text"
                v-model="book.bookPrice"
            >价格</div>
        <div><button @click="add()">新增</button></div>
    </div>

</template>

<script>
import { addBook } from "./../api";
// import bus from "./../bus";
export default {
    data() {
        return {
            book: {
                bookCover: "",
                bookName: "",
                bookInfo: "",
                bookPrice: ""
            }
        };
    },

    created() {},
    methods: {
        async add() {
            for (const val in this.book) {
                if (this.book.hasOwnProperty(val)) {
                    const element = this.book[val];
                    if (!element) {
                        alert(val + "不能为空");
                        return;
                    }
                }
            }
            let res = await addBook(this.book);
            if (res.code === 200) {
                this.$router.push("/list");
            }
        }
    }
};
</script>

<style>
</style>
