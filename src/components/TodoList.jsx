import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  return (
    <ul>
      <li>{<TodoListItem />}</li>
      <li>{<TodoListItem />}</li>
    </ul>
  )
}

export default TodoList
