import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

export const TodoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((item)=>item.id !==action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,newText}=action.payload;
            const tod=state.todos.find((todo)=>todo.id===id)
            if(tod){
                tod.text=newText
            }
        }
    }
})

 export const {addTodo,removeTodo,updateTodo}=TodoSlice.actions
 export default TodoSlice.reducer