import React, { useContext } from 'react'
import AddTask from '../components/addTask'
import DisplayTask from '../components/DisplayTask'

const AllTasks = () => {

  return (
    <>
      <h3>All Tasks</h3>
      <AddTask/>
      <DisplayTask/>
    </>
  )
}

export default AllTasks