import React, { useState } from 'react'
import '../App.css'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid'
import EditTodo from './EditTodo'
uuidv4();

const Main = () => {
    const [todos,setTodos]=useState([])
    const addTodo=(todo)=>{
        setTodos([...todos,{id:uuidv4(), task:todo, completed:false, edited:false}])
        console.log(todos)
    }

   const isCompleted=(id)=>{
    setTodos(todos.map(todo=> todo.id===id? {...todo, completed:!todo.completed}:todo))
   }

   const deleteTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id !==id))
   }
   const editTodo=(id)=>{
    setTodos(todos.map(todo=> todo.id===id? {...todo, edited:!todo.edited}:todo))
   }

   const updateTodo=(task, id)=>{
        setTodos(todos.map(todo=>todo.id===id? {...todo, task, edited:!todo.edited}:todo))
   }
  return (
   <div className="main">
    <h2>Get things Done!</h2>
    <TodoForm addTodo={addTodo}/>
    {todos.map((todo, index)=>(
        todo.edited ?(
        <EditTodo updateTodo={updateTodo} task={todo}/>
        ):(
        <Todo todo={todo} key={index}
        isCompleted={isCompleted} 
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        />
        )
    ))}
   </div>
  )
}

export default Main

