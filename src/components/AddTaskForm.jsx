import React, { useState } from 'react'

function AddTaskForm({ propAddTask }) {
  const [tarea, setTarea] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (tarea) {
      propAddTask(tarea)
      setTarea("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="tarea" name="tarea" placeholder="Agregar nueva tarea..." value={tarea} onChange={(e) => setTarea(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default AddTaskForm