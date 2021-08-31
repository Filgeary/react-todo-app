import React from 'react'
import './AppHeader.css'

const AppHeader = ({ toDo, done }) => (
  <div className="app-header d-flex">
    <h1>ToDo List</h1>
    <h2>
      {toDo} need to do, {done} done
    </h2>
  </div>
)

export default AppHeader
