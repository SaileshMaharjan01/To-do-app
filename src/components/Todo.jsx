import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

const Todo = ({todo, isCompleted, deleteTodo, editTodo}) => {
  return (
    <div className="todo">
        <p onClick={()=>isCompleted(todo.id)} className={`${todo.completed? 'completed':''}`}>{todo.task}</p>
        <div className="icon">
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(todo.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(todo.id)}/>
        </div>
    </div>
  )
}

export default Todo