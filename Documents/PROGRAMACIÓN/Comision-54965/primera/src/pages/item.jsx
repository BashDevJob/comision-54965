import React from 'react';
import ItemdetailContainer from '../components/ItemDetailContainer';
import {productos} from '../json/Products';
import { useParams } from 'react-router-dom';

const Item = () => {
    const{Itemid} = useParams()

    const productFilteredById = productos.filter(producto => producto.id === parseInt(Itemid));
  
    return (
      <ItemdetailContainer Productos={productFilteredById}/>
    )
};

export default Item