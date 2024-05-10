import React, { useContext } from 'react'
import '../styles/CompleteTasks.css'
import TaskContext from '../context/TaskContext'

const CompleteTasks = () => {
  const { tasks } = useContext(TaskContext)
  const completedTask = tasks.filter((task) => task.isTaskDone)
  return (
    <>
      <div className="completetask-container">
        <h3>Completed Tasks</h3>
        { completedTask.map((task) => (
          <ul key={task.id}>
            <li><p>{task.taskContent}</p></li>
          </ul>
        )) }
      </div>
    </>
  )
}

export default CompleteTasks