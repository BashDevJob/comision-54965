import React from 'react';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from '../pages/home';
import Category from '../pages/category';
import Item from '../pages/item';
import NavBar from '../components/NavBar';

const MainRouter = () => {
  return(
  <Router>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:categoryId' element={<Category/>} />
        <Route path='/item/:itemId' element={<Item />} />
    </Routes>
  </Router>
  )
}

export default MainRouter
