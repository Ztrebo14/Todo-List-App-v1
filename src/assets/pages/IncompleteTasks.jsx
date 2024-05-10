import React, { useContext } from 'react'
import '../styles/IncompleteTasks.css'
import TaskContext from '../context/TaskContext'

const IncompleteTasks = () => {
  const { tasks } = useContext(TaskContext) 
  const IncompleteTasks = tasks.filter((task) => !task.isTaskDone) 

  return (
    <>
      <div className="incompletetask-container">
        <h3>Incomplete Tasks</h3>
        {IncompleteTasks.map((task) => (
          <ul key={task.id}>
            <li><p>{task.taskContent}</p></li>
          </ul>
        ))}
      </div>
    </>
  )
}

export default IncompleteTasks