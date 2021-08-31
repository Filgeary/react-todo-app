import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({ todoItems }) => {
  const todoElements = todoItems.map(item => {
    const { id, ...restProps } = item

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...restProps} />
      </li>
    )
  })

  return <ul className="list-group todo-list">{todoElements}</ul>
}

export default TodoList
