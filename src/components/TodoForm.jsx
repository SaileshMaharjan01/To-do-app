import React, { useState } from 'react'
import '../App.css'

const TodoForm = ({addTodo}) => {
    const [todo,setTodo]=useState('')
    const handleSubmit=(event)=>{
        event.preventDefault();
        addTodo(todo)
        setTodo('')
    }

  return (
    <form action="" className="input" onSubmit={handleSubmit}>
        <input type="text" placeholder='What is your Task?' value={todo} onChange={event=>setTodo(event.target.value)} />
        <button type='submit' className='btn'>Add a task</button>
    </form>
  )
}

export default TodoForm