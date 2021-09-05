import React from 'react'
import './SearchPanel.css'

class SearchPanel extends React.Component {
  state = {
    searchValue: '',
  }

  handleChangeSearch = evt => {
    const { onChangeSearch } = this.props

    this.setState({ searchValue: evt.target.value })
    onChangeSearch(evt.target.value)
  }

  render() {
    const { searchValue } = this.state

    return (
      <input
        type="text"
        className="form-control"
        name="search"
        id="search"
        placeholder="search"
        value={searchValue}
        onChange={this.handleChangeSearch}
      />
    )
  }
}

export default SearchPanel
