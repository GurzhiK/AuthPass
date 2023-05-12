import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap py-8">
        <div className="w-full lg:p-8">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-bold px-5 py-3  rounded-lg block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color
                    : "text-white bg-gray-700 font-html font-normal duration-300 text-[17px]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Как купить
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-bold px-5 py-3  rounded-lg block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color
                    : "text-white bg-gray-700 font-html font-normal text-[17px] duration-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Получение товара
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-bold px-5 py-3  rounded-lg block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color
                    : "text-white bg-gray-700 font-html font-normal duration-300 text-[17px]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Условия возврата
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words font-normal rounded-lg bg-[#2020208e] border-2 border-[#2E2E2E] lg:bg-transparent lg:border-none  w-full mb-6  text-white">
            <div className="px-4 py-5 flex-auto lg:p-0">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Заходим в каталог

                    ·      Нажмите на кнопку «каталог»

                    ·      Выберите необходимую группу товаров.

                    ·      Выберите интересующий вас товар

                    ·      К каждому товару есть подробное описание, с указанием состава, энергетической ценности и рекомендации по приготовлению.

                    ·      Ознакомьтесь с характеристиками.

                    Добавление «в корзину»

                    ·      Если товар вам подходит, то выберите необходимый вес, в случаи с штучным товаром кол-во и нажмите кнопку «в корзину»

                    ·      Если вы хотите приобрести товар позже, добавьте его в избранное,  нажав значок «сердечко»

                    ·      Продолжите знакомство с нашим ассортиментом, не забудьте о сопутствующих товарах.

                    Когда покупки завершили

                    ·      Перейдите в «корзину», которая находиться в правом верхнем углу экрана.

                    ·      В «корзине» находятся все выбранные товары.

                    ·      Вы можете изменить количество товаров или удалить их из «корзины».

                    ·      Если у вас есть промокод, введите его в поле «промокод».

                    Оформление заказа

                    ·      Нажмите на кнопку «оформление заказ» и на открывшейся странице вам необходимо ввести свои данные.

                    Мы сохраним эти данные, чтобы вам не пришлось вводить их снова при оформлении следующего заказа.

                    ·
                    Укажите адрес доставки.
                    Способ оплаты

                    ·      Свои данные и контактную информацию

                    ·      Примите согласие на обработку персональных данных

                    ·      Нажмите кнопку «оформить заказ»

                    Заказ сразу же будет передан нашему менеджеру и он с вами свяжется, что бы уточнить детали заказа.

                    Если вы не хотите общаться с менеджером или вам не удобно, то можете сразу перейти к оплате и с вашей карточки будет списана сумма указанная в счете +10%, это та разница, на которую может быть расхождение в весовом товаре, поскольку он нарезается в ручную и иногда просто нет возможности сделать его определённого веса (расхождение возможно как в «+» так и в «-«)

                    После того как заказ полностью подготовят, будет произведен возврат необходимой суммы на вашу карту.

                    Если у вас подключено СМС уведомление, то вы получите сообщение или сможете увидеть это в вашей банковской выписке.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="main" />
    </>
  );
}
