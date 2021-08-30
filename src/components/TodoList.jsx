import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todoItems }) => {
  const todoElements = todoItems.map(item => {
    return <li>{<TodoListItem {...item} />}</li>
  })

  return <ul>{todoElements}</ul>
}

export default TodoList
