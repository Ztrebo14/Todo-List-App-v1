import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const IncompleteTasks = () => {
  const { tasks } = useContext(TaskContext) 
  const IncompleteTasks = tasks.filter((task) => !task.isTaskDone) 

  return (
    <>
      <h3>Incomplete Tasks</h3>
      {IncompleteTasks.map((task) => (
        <ul key={task.id}>
          <li>{task.taskContent}</li>
        </ul>
      ))}
    </>
  )
}

export default IncompleteTasks