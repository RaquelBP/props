import React from 'react'

const Task = ({ task, propDelete, propToggleTask }) => {
  const handleToggleTask = () => {
    propToggleTask(task.id)
  }

  const handleDelete = (e) => {
    e.stopPropagation() //Que no se propague el evento??
    propDelete(task.id)
  }

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }} onClick={handleToggleTask}>
      {task.text}
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  )
}

export default Task