import React, { useState } from 'react'
import '../App.css'

const EditTodo = ({updateTodo, task}) => {
    const [todo,setTodo]=useState('')
    const handleSubmit=(event)=>{
        event.preventDefault();
        updateTodo(todo,task.id )
        setTodo('')
    }

  return (
    <form action="" className="input" onSubmit={handleSubmit}>
        <input type="text" placeholder='update your task' value={todo} onChange={event=>setTodo(event.target.value)} />
        <button type='submit' className='btn'>Update</button>
    </form>
  )
}

export default EditTodo