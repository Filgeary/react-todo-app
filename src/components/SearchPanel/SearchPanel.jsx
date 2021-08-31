import React from 'react'
import './SearchPanel.css'

const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      name="search"
      id="search"
      placeholder="type to search"
    />
  )
}

export default SearchPanel
