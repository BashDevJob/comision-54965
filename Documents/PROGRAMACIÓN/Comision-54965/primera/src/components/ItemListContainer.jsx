import React from 'react';
import productCard from './productCard';

const ItemListContainer = ({productos}) => {
  return (
    <div>
      {
      productos.map(producto => {
        return (
          <productCard key={producto.id} productCard= {producto}/>
        )
      })
      }
      </div>
  )
}

export default ItemListContainer