<template>
    <div>
        <Navbar>列表</Navbar>
        <div class="content">
            <ul class="book-list">
                <router-link
                    tag="li"
                    :to="{name:'detail',params:{bid:book.bookId}}"
                    class="book"
                    v-for="book in bookList"
                    :key="book.bookId"
                >
                    <div
                        class="cover"
                        :style="{backgroundImage:'url('+book.bookCover+')'}"
                    ></div>
                    <div class="info">
                        <div class="name">{{book.bookName}}</div>
                        <div class="ad">{{book.bookInfo}}</div>
                        <div class="price">￥ {{book.bookPrice}}</div>
                        <div
                            class="del"
                            @click.stop="del(book.bookId)"
                        >删除</div>
                    </div>
                </router-link>
            </ul>

        </div>

    </div>
</template>

<script>
import Navbar from "./../components/Navbar";
import { getBooks, delBook } from "./../api";

export default {
    created() {
        this.initBooks();
    },
    name: "list",
    data() {
        return {
            bookList: [],
            offset: 0
        };
    },
    components: {
        Navbar
    },
    methods: {
        async initBooks() {
            let { hasMore, books } = await getBooks(this.offset);
            this.bookList = books;
            // if (res.hasMore) {
            //     this.offset += this.bookList.length;
            // }
        },
        async del(id) {
            await delBook(id);
            this.initBooks();
        }
    }
};
</script>

<style lang="scss" scoped>
.book {
    display: flex;
    padding: 8px;
    border-bottom: 1px solid #eee;

    .cover {
        width: 30%;
        height: 80px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .info {
        padding-left: 1em;
        font-size: 14px;
        width: 70%;
        position: relative;
        .name {
            font-size: 16px;
            margin-bottom: 0.5em;
        }
        .ad {
            font-size: 12px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 1em;
        }
        .price {
            color: #ee2200;
        }

        .del {
            position: absolute;
            right: 0;
            bottom: 0;
            font-size: 12px;
            padding: 4px 6px;
            background-color: #ee2200;
            color: #ffffff;
            border-radius: 0.4em;
            &:active {
                background-color: #882200;
            }
        }
    }
}
</style>
