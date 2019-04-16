import * as Types from "./mutations-type";



const mutations = {



    [Types.CART_ADD](state, book) {

        let item = state.cartList.find(item => item.bookId === book.bookId);

        if (item) {
            item.bookCount += 1;
            state.cartList = [...state.cartList] //触发getters
        }
        else {
            book.bookCount = 1;
            state.cartList = [...state.cartList, book]
        }
    },

    [Types.CART_REDUCE](state, book) {

        let item = state.cartList.find(item => item.bookId === book.bookId);
        if (item.bookCount > 1) {
            item.bookCount -= 1;
            state.cartList = [...state.cartList] //触发getters
        }


    },

    [Types.CART_DELETE](state, book) {

        for (let i = 0; i < state.cartList.length; i++) {
            const item = state.cartList[i];
            if (book.bookId === item.bookId) {
                state.cartList.splice(i, 1);
            }

        }


    },

    [Types.CART_CHANGE](state, book) {
        if (book.bookCount < 1) {
            book.bookCount = 1;
            alert("数量超出范围");
        }

        let item = state.cartList.find(item => item.bookId === book.bookId);
        item.bookCount = book.bookCount;
        state.cartList = [...state.cartList]

    },
    [Types.CART_CLEAR](state) {
        state.cartList = [];

    },
}

export default mutations;