import React from 'react';
import MainLayout from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Basket from './pages/Basket';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>} >
        <Route index  element={<Home/>}/>
        <Route path='basket' element={<Basket/>}/>
        </Route>  
    </Routes>
  );
}

export default App;