import React, { useContext } from 'react'
import '../styles/DisplayTask.css'
import TaskContext from '../context/TaskContext'

const DisplayTask = () => {
  const { tasks, updateTaskStatus } = useContext(TaskContext)
  
  const handleTaskStatus = (id) => {
    updateTaskStatus(id)
  }

  return (
    <>
    <div className="displaytask-comp-container">
        {tasks.map((task) => (
          <ul key={task.id}>
            <li><p>{task.taskContent}</p></li>
            <li><input type="checkbox" checked={task.isTaskDone} onChange={() => handleTaskStatus(task.id)} /></li>
          </ul>
        ))}
    </div>
    </>
  )
}

export default DisplayTask