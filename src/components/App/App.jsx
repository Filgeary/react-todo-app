import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import ItemAddForm from '../ItemAddForm/ItemAddForm'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import SearchPanel from '../SearchPanel/SearchPanel'
import TodoList from '../TodoList/TodoList'
import './App.css'

class App extends React.Component {
  state = {
    todoData: [
      { id: 1, label: 'Learn React', isImportant: false },
      { id: 2, label: 'Learn Redux', isImportant: false },
      { id: 3, label: 'Make Tests', isImportant: false },
      { id: 4, label: 'Learn TypeScript', isImportant: false },
      { id: 5, label: 'Get a job at Google!', isImportant: true },
    ],
  }

  handleDeleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(elem => elem.id === id)

      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)],
      }
    })
  }

  handleAddItem = text => {
    this.setState(({ todoData }) => {
      const newItem = {
        id: Date.now(),
        label: text,
        isImportant: false,
      }

      return {
        todoData: [...todoData, newItem],
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todoItems={this.state.todoData}
          onDeleteItem={this.handleDeleteItem}
        />

        <ItemAddForm onAddItem={this.handleAddItem} />
      </div>
    )
  }
}

export default App
