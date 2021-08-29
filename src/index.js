import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const elem = (
  <div>
    <h1>My ToDo List</h1>
    <input type="search" name="search" id="search" placeholder="Search" />

    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
)

ReactDOM.render(elem, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
