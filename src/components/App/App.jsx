import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import SearchPanel from '../SearchPanel/SearchPanel'
import TodoList from '../TodoList/TodoList'
import './App.css'

const App = () => {
  const todoData = [
    { id: 1, label: 'Learn React', isImportant: false },
    { id: 2, label: 'Learn Redux', isImportant: false },
    { id: 3, label: 'Make Tests', isImportant: false },
    { id: 4, label: 'Learn TypeScript', isImportant: false },
    { id: 5, label: 'Get a job at Google!', isImportant: true },
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todoItems={todoData} onDeleteItem={id => console.log(id)} />
    </div>
  )
}

export default App
