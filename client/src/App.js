import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import ConfForm from './components/OrderConfirmation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <Menu path="/menu" />
      <Checkout path="/checkout" />
      <ConfForm path="/account/:id/" />
    </Router>
  );
}

export default App;