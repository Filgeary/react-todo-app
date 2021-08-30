import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todoItems }) => {
  const todoElements = todoItems.map(item => {
    const { id, ...restProps } = item

    return <li key={id}>{<TodoListItem {...restProps} />}</li>
  })

  return <ul>{todoElements}</ul>
}

export default TodoList
