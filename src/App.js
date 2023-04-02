import React from 'react';
import Layout from './components/layout';
import Home from './pages/home';
import ContactForm from './pages/contact';
import NotFound from './pages/notFound';
import Cart from './pages/cart/index';
import SingleItem from './pages/singeItem';
import CheckoutSuccess from './pages/success';
import './app.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes basename="/react-ecom-ca">
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<CheckoutSuccess />} />
        <Route path="item/:id" element={<SingleItem />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
