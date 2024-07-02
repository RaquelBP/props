import './App.css'
import React, { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import Task from './components/Task'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ])

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTaskForm propAddTask={addTask} />
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} propDelete={deleteTask} propToggleTask={toggleTask} />
        ))}
      </ul>
    </div>
  )
}

export default App