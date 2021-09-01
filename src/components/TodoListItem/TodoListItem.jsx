import React from 'react'
import './TodoListItem.css'

class TodoListItem extends React.Component {
  handleClickLabel = () => {
    console.log(this.props.label)
  }

  render() {
    const { label, isImportant = false } = this.props

    const styles = {
      color: isImportant ? 'steelblue' : '',
      fontWeight: isImportant ? 'bold' : 'normal',
    }

    return (
      <span className="todo-list-item d-flex">
        <span
          className="todo-list-item-label"
          style={styles}
          tabIndex="0"
          onClick={this.handleClickLabel}
        >
          {label}
        </span>

        <div>
          <button type="button" className="btn btn-outline-success btn-sm ">
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
