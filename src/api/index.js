import axios from "axios";
axios.defaults.baseURL = "http://192.168.1.101:9999";
axios.interceptors.response.use(function (response) {
    return response.data;
});

export let getSlides = () => {
    return axios.get("api/home/slides");
}

export let getHotBooks = () => {
    return axios.get("api/home/hot");
}

export let getBooks = (offset) => {
    return axios.get(`api/books/getbooks?offset=${offset}`);
}

export let getBookDetail = (id) => {
    return axios.get(`api/books/detail?bookId=${id}`);
}

export let delBook = (id) => {
    return axios.delete(`api/books/del?bookId=${id}`);
}

export let updateBook = (id, data) => {
    return axios.patch(`api/books/update?bookId=${id}`, data);
}

export let addBook = (data) => {
    return axios.post("api/books/add", data);
}

export let getHome = () => {
    return axios.all([getSlides(), getHotBooks()]);
}

