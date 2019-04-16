const getters = {
    count: state => state.cartList.reduce((prev, next) => prev + next.bookCount, 0)
}
//数据刷新后触发getters 修改对象数组里面的某一个对象的属性值 不会触发
export default getters;