
export const Panel = () => {
  return (
    <>
      <section className=" px-[10vh] mt-24 sm:px-8">
        {/* Блоки с плюсами Заголовок*/}
        <div className="text-left ">
          <div>
            <h2 className=" text-secondary font-bold text-[60px] mt-20 mb-12 bg-backgroundAll md:text-[40px] md:text-center">Достоинства</h2>
          </div>
        </div>
        <div className=" rounded-lg border-2 border-[#2E2E2E] flex bg-[#2020208e] p-14 lg:p-0 lg:bg-transparent lg:border-none justify-between lg:flex-col lg:items-center flex-wrap  mb-[25vh]">

          <div className=" lg:mb-11 xl:mb-11 flex flex-col w-[400px] h-[450px] lg:w-[250px] items-center">
            <div className="bg-Panel w-[180px] h-[180px] bg-cover rounded-full" />
            <div className="p-3 break-words text-center">
              <h1 className="text-[#fff] text-[24px] font-bold mb-7 lg:text-[14px]">Отличное качество</h1>
              <p className="text-[#fff] font-light text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a iure odit harum corporis libero totam, deleniti corrupti maxime provident eaque autem? Molestiae eum facilis accusamus, voluptates odio in deleniti?</p>
            </div>
          </div>

          <div className=" lg:mb-11 xl:mb-11 flex flex-col w-[400px] h-[450px] lg:w-[250px] items-center">
            <div className="bg-Panel2 w-[180px] h-[180px] bg-cover rounded-full" />
            <div className="p-3 break-words text-center">
              <h1 className="text-[#fff] text-[24px] font-bold mb-7 lg:text-[14px]">Отличное качество</h1>
              <p className="text-[#fff] font-light text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a iure odit harum corporis libero totam, deleniti corrupti maxime provident eaque autem? Molestiae eum facilis accusamus, voluptates odio in deleniti?</p>
            </div>
          </div>

          <div className=" lg:mb-11 xl:mb-11 flex flex-col w-[400px] h-[450px] lg:w-[250px] items-center">
            <div className="bg-Panel3 w-[180px] h-[180px] bg-cover rounded-full" />
            <div className="p-3 break-words text-center">
              <h1 className="text-[#fff] text-[24px] font-bold mb-7 lg:text-[14px]">Отличное качество</h1>
              <p className="text-[#fff] font-light text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a iure odit harum corporis libero totam, deleniti corrupti maxime provident eaque autem? Molestiae eum facilis accusamus, voluptates odio in deleniti?</p>
            </div>
          </div>




        </div>
      </section>
    </>
  )
}

export default Panel;