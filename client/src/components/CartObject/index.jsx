import React from 'react';
import { Link } from 'react-router-dom';
function CartObject({ title, price, imageUrl, id, stock }) {
  const isAvailable = stock > 0;
  const isLowStock = isAvailable && stock < 10;
  const stockClass = isAvailable ? "text-green-600" : "text-main";
  const stockText = isLowStock ? "Осталось мало" : isAvailable ? "В наличии" : "Нет в наличии";
  const stockTextClass = isLowStock ? "text-orange-600" : "";

  return (
    <>
      <Link to={`/CartPage/${id}`}>
        <div className="w-[300px] h-[420px] bg-[#e0e0e0] rounded-lg px-[15px] py-[15px] hover:shadow-gray-900 hover:shadow-lg hover:scale-[1.05] -z-0 duration-300 easy-out">
          <img src={imageUrl} alt="" className="w-[270px] h-[200px] rounded-lg" />

          <p className="text-[16px] mt-[10px] whitespace-nowrap overflow-hidden text-ellipsis">{title}</p>

          <p className="text-[16px] mt-[12px] font-light text-[#707070]">Артикул: {id}</p>
          <p className="text-[24px] mt-[5px] font-bold text-[#292929] mb-2">{price} <span className="text-[#707070] text-[15px]"> ₽/1кг</span></p>
          {/* Добавляем класс stockClass, который выбирает цвет текста */}
          <p className={`text-16 ${stockClass} ${stockTextClass}`}>{stockText}</p>
          <div className="flex justify-end">
            <b className="text-white hover:text-gray-800 font-bold bg-main hover:bg-black duration-300 text-[17px] py-[10px] px-[30px] w-fit mt-[1vh] rounded-lg">В корзину</b>
          </div>
        </div>
      </Link>

    </>


  );
}

export default CartObject;
