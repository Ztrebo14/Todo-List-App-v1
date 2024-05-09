import React, { createContext, useState } from 'react'

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [ taskName, setTaskName ] = useState('')
    const [ tasks, setTasks ] = useState([])

    const handleTaskChange = (newTask) => {
        setTaskName(newTask)
    }


  return (
    <>
        <TaskContext.Provider value={{
            taskName, 
            tasks, 
            setTaskName,
            handleTaskChange,
            setTasks
        }}>
            {children}
        </TaskContext.Provider>
    </>
  )
}

export default TaskContext