import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { productos } from '../json/Products';

const Home = () => {
  return (
    <div>
      <ItemListContainer productos={productos}/>
    </div>
  )
}

export default Home