import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import {productos} from '../json/Products';
import { useParams } from 'react-router-dom';


const Category = () => {
  const{categoryid} = useParams()

  const productFilteredByCategory = productos.filter(producto => producto.category === categoryid);

  return (
    <ItemListContainer Productos={productFilteredByCategory}/>
  )
}

export default Category