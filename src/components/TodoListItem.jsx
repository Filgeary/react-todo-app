import React from 'react'

const TodoListItem = ({ label, isImportant = false }) => {
  const styles = {
    color: isImportant ? 'tomato' : '',
  }

  return <span style={styles}>{label}</span>
}

export default TodoListItem
