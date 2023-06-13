import React from 'react';
import productos from '../json/Products';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
  return (
    <div>
      <ItemListContainer productos={productos}/>
    </div>
  )
}

export default Home