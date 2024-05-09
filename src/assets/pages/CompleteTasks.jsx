import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const CompleteTasks = () => {
  const { tasks } = useContext(TaskContext)
  const completedTask = tasks.filter((task) => task.isTaskDone)
  return (
    <>
      <h3>Completed Tasks</h3>
      { completedTask.map((task) => (
        <ul >
          <li key={task.id}>{task.taskContent}</li>
        </ul>
      )) }
    </>
  )
}

export default CompleteTasks