<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">TodoList</a>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="text-danger">亲，您还有{{count}}件待办事项</h3>
                            <input
                                type="text"
                                class="form-control"
                                @keyup.enter="add"
                                v-model="title"
                            >
                        </div>
                        <div class="panel-body">
                            <ul class="list-group">
                                <li
                                    class="list-group-item"
                                    v-for="(todo, index) in todoFilter"
                                    :key="index"
                                >
                                    <div class="input-group">
                                        <span class="input-group-addon">
                                            <input type="checkbox" v-model="todo.isSelected">
                                        </span>
                                        <div
                                            v-show="todo!==editTodo"
                                            class="form-control"
                                            @dblclick="edit(todo)"
                                            :class="{finished:todo.isSelected}"
                                        >{{todo.name}}</div>
                                        <input
                                            ref="editInput"
                                            v-focus="todo==editTodo"
                                            v-show="todo==editTodo"
                                           

                                            @keyup.enter="finishEdit"
                                            @blur="finishEdit"
                                            @keyup.esc="cancelEdit(todo)"
                                            type="text"
                                            class="form-control"
                                            v-model="todo.name"
                                        >
                                        <span class="input-group-btn">
                                            <button
                                                class="btn btn-danger"
                                                type="button"
                                                @click="remove(todo)"
                                            >删除</button>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <ul class="nav nav-pills">
                                <li role="presentation" :class="{active:hash==='all'||hash===''}">
                                    <a href="#/all">全部任务</a>
                                </li>
                                <li role="presentation" :class="{active:hash==='finished'}">
                                    <a href="#/finished">已完成</a>
                                </li>
                                <li role="presentation" :class="{active:hash==='unfinished'}">
                                    <a href="#/unfinished   ">未完成</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoList",
    mounted(){
        
    },
    created(){
        this.todos=JSON.parse(localStorage.getItem("data"))||this.todos;
        let location=window.location;
        this.hash=location.hash.substring(2);
        
        
        window.addEventListener("hashchange",()=>{
            this.hash=location.hash.substring(2);
        },false)

        
    },
    

    directives:{
       focus(elem,bindings){
           
        //    if(bindings.value==true){
        //        setTimeout(() => {
        //            elem.focus();
        //            elem.select();
        //        }, 40);
        //    }
           
       }
    },
    data() {
        return {
            hash:"",
            title: "",
            editTodo: "",
            defaultVale:"",
            

            todos: [
                
                
            ]
        };
    },
    methods: {
        add() {
            if (this.title == "") {
                return;
            }
            this.todos.push({
                name: this.title,
                isSelected: false
            });
            this.title = "";
        },
        remove(todo) {
            this.todos = this.todos.filter(item => item !== todo);
        },
        edit(todo) {
            
            this.editTodo = todo;
            this.defaultVale=todo.name;

            //等待渲染完毕后，input已经显示出来，再调用focus
            this.$nextTick(()=>{
                let inputs=this.$refs.editInput;
                for (let index = 0; index < inputs.length; index++) {
                    const element = inputs[index];
                    if(element.style.display!=="none"){
                        element.focus();
                    }
                    
                }
                

            })
        },
        finishEdit(){
            
            this.editTodo="";
            this.defaultVale="";
        },
        cancelEdit(todo){
            todo.name=this.defaultVale;
            this.editTodo="";
            

        }
    },
    computed: {
        count() {
            return this.todos.filter(item => !item.isSelected).length;
        },
        todoFilter(){
            if(this.hash==="all") return this.todos;
            else if(this.hash==="finished") return this.todos.filter(item=>item.isSelected);
            else if(this.hash==="unfinished") return this.todos.filter(item=>!item.isSelected);
            return this.todos;
        }
    },
    watch:{
        todos:{
            handler(){
                localStorage.setItem("data",JSON.stringify(this.todos))
            },
            deep:true
        }
    }
};
</script>

<style>
.finished {
    font-weight: bold;
    color: #33bb11 !important;
    text-decoration: line-through;
}
</style>
