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
      { id: 1, label: 'Learn JavaScript', isImportant: true, isDone: false },
      { id: 2, label: 'Learn React', isImportant: true, isDone: false },
      { id: 3, label: 'Learn Redux', isImportant: true, isDone: false },
      { id: 4, label: 'Make Tests', isImportant: false, isDone: false },
      { id: 5, label: 'Learn TypeScript', isImportant: false, isDone: false },
    ],
  }

  // helpers
  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex(elem => elem.id === id)
    const foundItem = arr[idx]
    const newItem = { ...foundItem, [propName]: !foundItem[propName] }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  // handlers
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
        isDone: false,
      }

      return {
        todoData: [...todoData, newItem],
      }
    })
  }

  handleToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'isDone'),
      }
    })
  }

  handleToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'isImportant'),
      }
    })
  }

  render() {
    const { todoData } = this.state

    const doneTotalCount = todoData.filter(item => item.isDone).length
    const todoTotalCount = todoData.length - doneTotalCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoTotalCount} done={doneTotalCount} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todoItems={todoData}
          onDeleteItem={this.handleDeleteItem}
          onToggleDone={this.handleToggleDone}
          onToggleImportant={this.handleToggleImportant}
        />

        <ItemAddForm onAddItem={this.handleAddItem} />
      </div>
    )
  }
}

export default App
