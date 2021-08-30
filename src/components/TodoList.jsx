import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  return (
    <ul>
      <li>{<TodoListItem label="Learn React" />}</li>
      <li>{<TodoListItem label="Learn Redux" />}</li>
      <li>{<TodoListItem label="Write Tests" />}</li>
      <li>{<TodoListItem label="Learn TypeScript" />}</li>
      <li>{<TodoListItem label="Find a Cool Job!" important />}</li>
    </ul>
  )
}

export default TodoList
