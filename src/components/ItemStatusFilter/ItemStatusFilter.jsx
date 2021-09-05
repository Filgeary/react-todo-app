import React from 'react'

const buttonsList = [
  { filter: 'all', title: 'All' },
  { filter: 'active', title: 'Active' },
  { filter: 'done', title: 'Done' },
]

const ItemStatusFilter = ({ filterValue, onChangeFilter }) => {
  const buttonsElements = buttonsList.map(({ filter, title }) => {
    const isActive = filter === filterValue
    const cls = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary')

    return (
      <button
        key={filter}
        type="button"
        className={cls}
        onClick={() => onChangeFilter(filter)}
      >
        {title}
      </button>
    )
  })

  return <div className="btn-group">{buttonsElements}</div>
}

export default ItemStatusFilter
