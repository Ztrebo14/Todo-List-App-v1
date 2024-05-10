import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const DisplayTask = () => {
  const { tasks, updateTaskStatus } = useContext(TaskContext)
  
  const handleTaskStatus = (id) => {
    updateTaskStatus(id)
  }

  return (
    <>
        {tasks.map((task) => (
          <ul key={task.id}>
            <li>{task.taskContent}</li>
            <li><input type="checkbox" checked={task.isTaskDone} onChange={() => handleTaskStatus(task.id)} /></li>
          </ul>
        ))}
    </>
  )
}

export default DisplayTask