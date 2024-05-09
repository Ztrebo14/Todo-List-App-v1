import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const DisplayTask = () => {
    const { tasks } = useContext(TaskContext)

  return (
    <>
        <h3>Current Tasks:</h3>
        {tasks.map((task) => (
          <ul key={task.id}>
            <li>{task.taskContent}</li>
            <li><input type="checkbox" checked={task.isTaskDone}/></li>
          </ul>
        ))}
    </>
  )
}

export default DisplayTask