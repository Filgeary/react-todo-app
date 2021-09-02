import React from 'react'
import './TodoListItem.css'

class TodoListItem extends React.Component {
  state = {
    isDone: false,
    isImportant: false,
  }

  handleClickLabel = () => {
    this.setState(prevState => {
      return { isDone: !prevState.isDone }
    })
  }

  handleClickImportant = () => {
    this.setState(prevState => {
      return { isImportant: !prevState.isImportant }
    })
  }

  render() {
    const { label } = this.props
    const { isDone, isImportant } = this.state

    let cls = ''
    if (isDone) cls += ' done'
    if (isImportant) cls += ' important'

    return (
      <span className={`todo-list-item d-flex ${cls}`}>
        <span
          className="todo-list-item-label"
          tabIndex="0"
          onClick={this.handleClickLabel}
        >
          {label}
        </span>

        <div>
          <button
            type="button"
            className="btn btn-outline-success btn-sm "
            onClick={this.handleClickImportant}
          >
            <i className="fa fa-exclamation" />
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm ">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </span>
    )
  }
}

export default TodoListItem
