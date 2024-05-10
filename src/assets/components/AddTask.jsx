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
            isTaskDone: false
        }
        setTasks([...tasks,  taskObj])
        handleTaskChange('')
    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

  return (
    <>
        <input type="text" value={taskName} onKeyDown={handleKeyDown} onChange={handleInput}/>
        <button onClick={handleSubmit}>Add Task</button>
    </>
  )
}

export default addTask