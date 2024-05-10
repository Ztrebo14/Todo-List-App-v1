import React, { useContext } from 'react'
import '../styles/AllTasks.css'
import AddTask from '../components/AddTask'
import DisplayTask from '../components/DisplayTask'

const AllTasks = () => {

  return (
    <>
    <div className="alltask-container">
      <h3>All Tasks</h3>
      <AddTask/>
      <DisplayTask/>
    </div>
    </>
  )
}

export default AllTasks