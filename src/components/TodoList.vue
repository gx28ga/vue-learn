<template>
    <div>
        <h1>{{appName}}</h1>
        <div><input 
            type="text" 
            @keydown.enter="add(todoName)" 
            v-model="todoName" 
            placeholder="press enter to add"></div>
        <ul>
            <li  
                v-for="(todo,index) in todos" 
                :key="todo.id"  
                
                
                :class={finished:todo.isFinished}
            >
                    <input type="checkbox">
                    <input 
                        type="text" 
                        v-model="todo.name" 
                        v-show="todo.editable"
                        @keydown.enter="editFinished(todo)">
                    
                    <span v-show="!todo.editable" @dblclick="edit(todo)"> 
                        <span>{{index}}-</span> 
                        <span>{{todo.name}}</span> 
                    </span>
                    
                    <button 
                        @click="del(todo.id)" 
                        
                    >delete</button>
            </li>
        </ul>
        <div>
            
            
        </div>
    </div>
</template>

<script>
export default {
    name:"TodoList",
    data(){
        return {
            todoName:"",
            appName:"TodoList",
            todos:[
                
            ]
            

        }
    },
    methods:{
        add(inputName){
            if(!inputName){
                alert("empty input is not allowed");
                return;
            }
            this.todos.unshift({
                name:inputName,
                isFinished:false,
                id:"a"+(this.todos.length+1),
                editable:false,

            })
            this.todoName="";
        },
        del(id){
            this.todos=this.todos.filter(todo=>todo.id!==id);

            


        },
        delAll(id){

        },
        finish(todo){
            if(todo.isFinished){
                todo.isFinished=false;

            }else{
                todo.isFinished=true;
            }
            
        },
        edit(todo){
            todo.editable=true;


        },
        editFinished(todo){
            todo.editable=false;
        },

    }

}
</script>

<style>
    .finished{
        font-weight: bold;
        color: #33bb11;
        text-decoration:line-through;
    }

</style>
