import axios from "axios";
axios.defaults.baseURL="http://localhost:9999";
axios.interceptors.response.use(function(response){
    return response.data;
})
export let getSlides = () => {
   return axios.get("api/home/slides");
}

export let getHotBooks= () => {
    return axios.get("api/home/hot")
}

export let getBooks = () => {
    return axios.get("api/books/getbooks")
}

export let delBook = (id) => {
    return axios.post("api/books/del",{bookId:id});
}