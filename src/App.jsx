import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TaskProvider } from './assets/context/TaskContext'
import './assets/styles/App.css'
import SideNavigator from './assets/components/SideNavigator'
import AllTasks from './assets/pages/AllTasks'
import CompleteTasks from './assets/pages/CompleteTasks'
import IncompleteTasks from './assets/pages/IncompleteTasks'

function App() {
  return (
    <>
    <TaskProvider>
      <Router>
        <Routes>
          <Route path='/' element={<SideNavigator/>}>
            <Route index path='/all-tasks' element={<AllTasks/>} />
            <Route path='/complete-tasks' element={<CompleteTasks/>} />
            <Route path='/incomplete-tasks' element={<IncompleteTasks/>} />
          </Route>
        </Routes>
      </Router>
    </TaskProvider>
    </>
  )
}

export default App
