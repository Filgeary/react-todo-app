import React from 'react'
import './SearchPanel.css'

const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control"
      name="search"
      id="search"
      placeholder="search"
    />
  )
}

export default SearchPanel
