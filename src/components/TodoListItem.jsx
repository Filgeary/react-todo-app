import React from 'react'

const TodoListItem = ({ label, important = false }) => {
  const styles = {
    color: important ? 'tomato' : '',
  }

  return <span style={styles}>{label}</span>
}

export default TodoListItem
