import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext'
import { v4 as uuidv4 } from 'uuid' 

const addTask = () => {
    const { taskName, handleTaskChange, tasks, setTasks } = useContext(TaskContext)

    const handleInput = e => {
        handleTaskChange(e.target.value)
    }

    const handleSubmit = () => {
        const taskObj = {
            id: uuidv4(),
            taskContent: taskName,
            isTaskDone: true
        }
        setTasks([...tasks,  taskObj])
        handleTaskChange('')
    }

  return (
    <>
        <input type="text" value={taskName} onChange={handleInput}/>
        <button onClick={handleSubmit}>Add Task</button>
    </>
  )
}

export default addTask