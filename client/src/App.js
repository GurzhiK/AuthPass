import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import Registration from './pages/Auth/Registration';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import ShopCart from './pages/ShopCart';
import AboutUs from './pages/AboutUs';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-backgroundAll">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/CartPage/:id' element={<CartPage />} />
            <Route path='/ShopCart' element={<ShopCart />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/Reg' element={<Registration />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;