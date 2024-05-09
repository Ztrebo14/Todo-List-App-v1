import React from 'react'
import '../../assets/styles/SideNavigator.css'
import { NavLink, Outlet } from 'react-router-dom'

const SideNavigator = () => {

  return (
    <>
    <div className="navigator-content">
      <div className="sidebar-nav">
        <h3>TODO LIST APP</h3>
        <div className="sidebar-nav-links">
          <NavLink to={'/all-tasks'}>All Tasks</NavLink>
          <NavLink to={'/complete-tasks'}>Complete Tasks</NavLink>
          <NavLink to={'/incomplete-tasks'}>Incomplete Tasks</NavLink>
        </div>
      </div>
      <div className="outlet-content">
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default SideNavigator