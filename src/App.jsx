import React from 'react';
import MainLayout from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout>
        <Home/>
      </MainLayout>} />
    </Routes>
  );
}

export default App;