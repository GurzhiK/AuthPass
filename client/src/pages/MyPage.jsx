import React from "react";

const MyPage = () => {

  return (
    <>
      <section className="px-[10vh] py-40 min-h-[100vh]">
        <div>
          <h1 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-center">Ваши данные</h1>
          <div className="py-8 gap-y-[40px] grid grid-flow-col grid-cols-2 grid-rows-2 content-between sm:grid-cols-1 sm:grid-flow-row">
            <div>
              <h3 className="text-secondary font-bold text-[20px] mb-4 bg-backgroundAll">Ваше имя:</h3>
              <div className="bg-gray-700 p-2 rounded-lg w-fit">
                <h3 className="text-lg text-white font-light">Владислав</h3>
              </div>
            </div>
            <div>
              <h3 className="text-secondary font-bold text-[20px] mb-4 bg-backgroundAll">Ваша фамилия:</h3>
              <div className="bg-gray-700 p-2 rounded-lg w-fit">
                <h3 className="text-lg text-white font-light ">Иванов</h3>
              </div>
            </div>
            <div>
              <h3 className="text-secondary font-bold text-[20px] mb-4 bg-backgroundAll">Ваш номер телефона:</h3>
              <div className="bg-gray-700 p-2 rounded-lg w-fit">
                <h3 className="text-lg text-white font-light">+7 XXX XXX XX XX</h3>
              </div>
            </div>
            <div>
              <h3 className="text-secondary font-bold text-[20px] mb-4 bg-backgroundAll">Ваш логин:</h3>
              <div className="bg-gray-700 p-2 rounded-lg w-fit">
                <h3 className="text-lg text-white font-light">vladislave</h3>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-secondary font-bold text-[40px] mb-12 bg-backgroundAll md:text-center">История заказов</h1>
            <div>
              <div className="flex items-center flex-wrap border-2 border-[#2E2E2E] p-4 justify-between sm:gap-[50px] sm:flex-col1">
                <div className="flex h-full max-h-[50px] rounded-lg mr-8 items-center">
                  <div className="max-w-[50px] w-12 h-12 bg-cover ">
                    <img src="https://eda.ru/img/eda/620x-/s1.eda.ru/StaticContent/Photos/170306190614/210119150750/p_O.jpg" className="rounded-lg" />
                  </div>
                  <div className="flex flex-col ml-5 text-white">
                    {/* //Название товара */}
                    <h1 className="text-[18px] font-bold">Филе мясо птицы</h1>
                    {/* //Цена товара */}
                    <h1 className="font-bold text-gray-400">500 Р</h1>
                    {/* //Количество купленных товаров */}
                    <h2 className="text-gray-500">2</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-transparent w-44 h-10 rounded-lg border-2 border-gray-700 text-gray-500 hover:bg-main hover:border-none hover:text-white duration-300 mt-3">Удалить профиль</button>
          </div>
        </div>
      </section >
    </>
  )
}

export default MyPage;