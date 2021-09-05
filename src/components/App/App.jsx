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
    searchValue: '',
    filterValue: 'all',
  }

  // helpers
  // =================================================

  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex(elem => elem.id === id)
    const foundItem = arr[idx]
    const newItem = { ...foundItem, [propName]: !foundItem[propName] }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  findItems = (itemsList, searchValue) => {
    if (searchValue.length === 0) return itemsList

    return itemsList.filter(item => {
      return item.label.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  filterItems = (itemsList, filterValue) => {
    switch (filterValue) {
      case 'all':
        return itemsList

      case 'active':
        return itemsList.filter(item => !item.isDone)

      case 'done':
        return itemsList.filter(item => item.isDone)

      default:
        return itemsList
    }
  }

  // handlers
  // =================================================

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

  handleChangeSearch = value => {
    this.setState({ searchValue: value })
  }

  handleChangeFilter = value => {
    this.setState({ filterValue: value })
  }

  render() {
    const { todoData, searchValue, filterValue } = this.state

    const visibleList = this.filterItems(
      this.findItems(todoData, searchValue),
      filterValue,
    )

    const doneTotalCount = todoData.filter(item => item.isDone).length
    const todoTotalCount = todoData.length - doneTotalCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoTotalCount} done={doneTotalCount} />

        <div className="top-panel d-flex">
          <SearchPanel onChangeSearch={this.handleChangeSearch} />
          <ItemStatusFilter
            filterValue={filterValue}
            onChangeFilter={this.handleChangeFilter}
          />
        </div>

        <TodoList
          todoItems={visibleList}
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
