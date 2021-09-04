import React from 'react'
import './ItemAddForm.css'

class ItemAddForm extends React.Component {
  state = {
    label: '',
  }

  handleChangeLabel = evt => {
    this.setState({ label: evt.target.value })
  }

  handleSubmitForm = evt => {
    evt.preventDefault()

    this.props.onAddItem(this.state.label)
    this.setState({ label: '' })
  }

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.handleSubmitForm}>
        <input
          type="text"
          name="new-todo"
          id="new-todo"
          placeholder="add ToDo"
          className="form-control"
          onChange={this.handleChangeLabel}
          value={this.state.label}
        />

        <button type="submit" className="btn btn-primary ">
          Add ToDo
        </button>
      </form>
    )
  }
}

export default ItemAddForm
