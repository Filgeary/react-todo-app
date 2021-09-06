import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({
  label,
  onDeleteItem,
  onToggleDone,
  onToggleImportant,
  isDone,
  isImportant,
}) => {
  // mix classes
  let cls = ''
  if (isDone) cls += ' done'
  if (isImportant) cls += ' important'

  return (
    <span className={`todo-list-item d-flex ${cls}`}>
      <span
        className="todo-list-item-label"
        tabIndex="0"
        onClick={onToggleDone}
        title={`Mark as ${isDone ? 'Not Done' : 'Done'}`}
      >
        {label}
      </span>

      <div>
        <button
          type="button"
          className="btn btn-outline-success btn-sm "
          title={`Mark as ${isImportant ? 'Not Important' : 'Important'}`}
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm "
          title="Delete Task"
          onClick={onDeleteItem}
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </span>
  )
}

export default TodoListItem
