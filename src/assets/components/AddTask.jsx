import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext'

const addTask = () => {
    const { taskName, handleTaskChange, tasks, setTasks } = useContext(TaskContext)

    const handleInput = e => {
        handleTaskChange(e.target.value)
    }

    const handleSubmit = () => {
        setTasks([...tasks, taskName ])
        handleTaskChange(' ')
    }

  return (
    <>
        <input type="text" value={taskName} onChange={handleInput}/>
        <button onClick={handleSubmit}>Add Task</button>
    </>
  )
}

export default addTask