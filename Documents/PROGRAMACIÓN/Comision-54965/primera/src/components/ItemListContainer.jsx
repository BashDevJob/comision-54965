import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div style={{
        fontSize:'1rem',
        color: '#afafaf',
        padding: '5px',
        margin:'.5rem'
    }}>{greeting}</div>
  )
}

export default ItemListContainer