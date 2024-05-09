import React, { createContext, useState } from 'react'

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [ taskName, setTaskName ] = useState('')
    const [ tasks, setTasks ] = useState([])

    const handleTaskChange = (newTask) => {
        setTaskName(newTask)
    }

    const updateTaskStatus = (taskId) => {
        setTasks((prevTask) => 
            prevTask.map((task) => 
                task.id === taskId ? { ...task, isTaskDone: !task.isTaskDone } : task
            )
        )
    }


  return (
    <>
        <TaskContext.Provider value={{
            taskName, 
            tasks, 
            setTaskName,
            handleTaskChange,
            setTasks,
            updateTaskStatus
        }}>
            {children}
        </TaskContext.Provider>
    </>
  )
}

export default TaskContext