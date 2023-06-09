import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';
import Basket from '../assets/img/basket.svg';
import Profile_icon from '../assets/img/profile-icon.svg';
import Logo from '../assets/img/logo.svg';
import Search from './Search';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const logoutUser = () => {
    dispatch(logout());
    navigate('/');
  };

  const guestLinks = () => (
    <Fragment>
      <Link to="/Login"><h1 className="text-white">Войти</h1></Link>
      <Link to="/reg"><h1 className="text-white">Зарегистрироваться</h1></Link>
    </Fragment>
  );

  const authLinks = () => (
    <h1 className='min-w-[35px]' href='#!' onClick={logoutUser}>Logout</h1>
  );

  return (
    <Fragment>
      <div className="bg-[#27272780] backdrop-blur-[5px] lg:hidden backdrop-grayscale-[80%] z-10 flex flex-row px-[100px] py-[23px] justify-between items-center fixed w-full">
        <Link to="/"><img src={Logo} alt="text" /></Link>
        <ul className="flex flex-row gap-x-[64px] float-left w-full ml-[64px] font-html flex-wrap items-center">
          <li className="text-[#fff] text-[16px] hover:text-mainLight duration-300"><Link to="/">Главная</Link></li>
          <li className="text-[#fff] text-[16px] hover:text-mainLight duration-300"><Link to="/AboutUs">О нас</Link></li>
          <Search />
        </ul>

        <div className="flex flex-row gap-x-[36px]">

          <Link to='/MyPage'><img src={Profile_icon} alt="text" /></Link>
          <Link to="/shopcart"><img src={Basket} alt="cart" className="min-w-[35px]" /></Link>
          {isAuthenticated ? authLinks() : guestLinks()}
        </div>
      </div>
      {/* MOBILE-MENU  */}
      <nav>
        <section className="md:flex header:hidden lg:flex fixed w-full bg-[#27272780] z-10 backdrop-blur-[5px] lg:flex-col">
          <div className="flex items-center justify-around w-full">

            <div
              className="space-y-[5px]  cursor-pointer p-4"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
            </div>
            <Search />
            <Link to="/shopcart"><img src={Basket} alt="cart" className="min-w-[35px]" /></Link>


          </div>
          <div className={isNavOpen ? "duration-300 w-full h-[100vh] t-0 l-0 z-40 flex flex-col justify-evenly items:center sticky" : "hidden"} onClick={() => setIsNavOpen(false)}>
            <div
              className="absolute top-0 right-0 px-8 py-9"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-400 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[250px] text-white text-2xl" onClick={() => setIsNavOpen(false)}>
              <li>
                <Link to='/'>Главная</Link>
              </li>
              <li>
                <Link to='/AboutUs'>О нас</Link>
              </li>
              <li>
                <Link to='/Profile'>Профиль</Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      {isAuthenticated ? <button onClick={logoutUser}>Logout</button> : <Fragment></Fragment>}
    </Fragment>
  );
}

export default Header;
