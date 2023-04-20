import React from 'react'
import Logo from '../assets/img/logo.svg';

function Footer() {
  return (
    <div>
      <footer className="p-4 bg-[#2E2E2E] py-[50px] pl-[6vh] pr-[6vh]">
        <div className="sm:flex-col sm:items-center sm:justify-between ">
          <button className="flex items-center mb-4 sm:mb-0 sm:flex-col">
            <img className="mr-3 h-8" src={Logo} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Мясная лавка</span>
          </button>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-400 sm:mb-0 sm:flex-col sm:text-right sm:items-start">
            <li>
              <button className="mr-4 hover:underline md:mr-6 ">О нас</button>
            </li>
            <li>
              <button className="mr-4 hover:underline md:mr-6">Каталог</button>
            </li>
            <li>
              <button className="mr-4 hover:underline md:mr-6 ">Сотрудничество</button>
            </li>
            <li>
              <button className="hover:underline">Контакты</button>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8 border-gray-500" />
        <span className="block text-sm text-gray-500">© 2022 <button className="hover:underline">MeatMain™</button>. Все права защищены.
        </span>
      </footer>

    </div>
  )
}

export default Footer