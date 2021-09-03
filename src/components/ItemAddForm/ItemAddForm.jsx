import React from 'react'

const ItemAddForm = ({ onAddItem }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => onAddItem(new Date(Date.now()).toLocaleString('en-GB'))}
      >
        Add Item
      </button>
    </div>
  )
}

export default ItemAddForm
