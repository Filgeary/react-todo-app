import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'
import './index.css'
import reportWebVitals from './reportWebVitals'

const App = () => {
  const todoData = [
    { id: 1, label: 'Learn React', isImportant: false },
    { id: 2, label: 'Learn Redux', isImportant: false },
    { id: 3, label: 'Make Tests', isImportant: false },
    { id: 4, label: 'Learn TypeScript', isImportant: false },
    { id: 5, label: 'Find a Cool Job!', isImportant: true },
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todoItems={todoData} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
