import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideNavigator from './assets/components/SideNavigator'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SideNavigator/>}>
            
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
