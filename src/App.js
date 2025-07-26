import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/header';
import BackToTop from './components/BackToTop';

// Pages
import CartPage from './pages/cart';
import ProductPage from './pages/product';
import LoginPage from './pages/login';
import HomePage from './pages/home';

// Styles
import './App.scss';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      {/* Header shown on every page */}
      <Header />

      {/* Global toast notification container */}
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      {/* Main content area */}
      <div className="page-container">
        <Switch>
          <Route exact path="/cart">
            <CartPage />
          </Route>

          <Route exact path="/product/:productId">
            <ProductPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </Router>
  );
}

export default App;
