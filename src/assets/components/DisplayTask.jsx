import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const DisplayTask = () => {
    const { taskName, tasks } = useContext(TaskContext)

  return (
    <>
        <h3>Current Tasks:</h3>
        {tasks.map((task) => (
            <ul>
                <li>{task}</li>
            </ul>
        ))}
    </>
  )
}

export default DisplayTask