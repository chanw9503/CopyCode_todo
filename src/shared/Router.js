import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../redux/comonents/Header';
import Main from '../pages/Main';
import Footer from '../redux/comonents/Footer';
import Detail from '../pages/Detail';
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
