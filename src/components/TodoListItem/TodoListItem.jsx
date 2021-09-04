import React from 'react'
import './TodoListItem.css'

class TodoListItem extends React.Component {
  render() {
    const {
      label,
      onDeleteItem,
      onToggleDone,
      onToggleImportant,
      isDone,
      isImportant,
    } = this.props

    let cls = ''
    if (isDone) cls += ' done'
    if (isImportant) cls += ' important'

    return (
      <span className={`todo-list-item d-flex ${cls}`}>
        <span
          className="todo-list-item-label"
          tabIndex="0"
          onClick={onToggleDone}
        >
          {label}
        </span>

        <div>
          <button
            type="button"
            className="btn btn-outline-success btn-sm "
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation" />
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm "
            onClick={onDeleteItem}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </span>
    )
  }
}

export default TodoListItem
