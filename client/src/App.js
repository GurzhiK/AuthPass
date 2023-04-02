import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import ShopCart from './pages/ShopCart';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="bg-backgroundAll">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/CartPage/:id' element={<CartPage />} />
            <Route path='/ShopCart' element={<ShopCart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
