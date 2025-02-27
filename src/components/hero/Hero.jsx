import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mt-[30px] 2xl:mt-[110px] grid lg:grid-cols-2 gap-[70px] lg:mb-[80px]">
      <div className="max-w-[660px] flex flex-col gap-[25px]">
        <h1 className="text-[50px] font-semibold">Black Mulberry Ice Cream</h1>
        <p>Black Mulberry Ice Cream offers a unique dessert experience inspired by nature's freshest flavors. Carefully selected black mulberries, with its intense and refreshing aroma, it creates a natural feeling of coolness in every bite.</p>
        <div className="flex gap-[40px]">
          <button className="hero-btn">Order Now</button>
          <button className="hero-btn bg-white/20 border-0 hover:bg-red-700 hover:border-1">Reservation</button>
        </div>
      </div>

      <div className="flex items-center lg:justify-end  ">
        <div>
        <div className="flex gap-[18px]">
          <div className="bg-white p-[30px_25px_40px_30px] rounded-2xl text-black">
            <div className="flex gap-[20px]">
              <img src="/profile.png" />
              <div>
                <h3 className="text-[24px] font-semibold">Jack</h3>
                <div className="flex gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

            <p className="mt-[15px] lg:max-w-[300px]">
            Enjoy frozen bliss with our irresistible ice cream flavors!
            </p>
          </div>

          <img src="/dots.svg" />
        </div>
        <div className="mt-[20px] lg:mt-[40px]">
          <h3 className=" mb-[15px] font-medium">Categories</h3>
          <div className="flex gap-[40px]">
            <button className="card-btn">
              <img src="/icon-3.svg" />
            </button>
            <button className="card-btn">
              <img src="/icon-2.svg" />
            </button>
            <button className="card-btn">
              <img src="/icon-1.svg" />
            </button>
            <button className="card-btn">
              <img src="/icon-4.svg" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
