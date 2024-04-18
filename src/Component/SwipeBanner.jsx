import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { useNavigate } from "react-router-dom";
const SwipeBanner = () => {
  const { myData } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {myData.map((item) => (
          <SwiperSlide className="swiper-slide h-full" key={item.id}>
            <div className="relative h-full w-full">
              <img src={item.image} alt="" className="h-full object-cover" />
              <div onClick={() => navigate(`/estatedetails/${item.id}`)} className="absolute  w-4/5 lg:w-2/4 mx-auto h-1/2 md:h-1/3 my-auto inset-0 flex flex-col bg-white/80 text-black rounded-md ">
                <div className="my-auto mx-auto space-y-3 lg:space-y-5">
                  <h1 className="text-lg md:text-3xl font-bold">
                    {item.estate_title}{" "}
                    <sup className=" text-white text-sm md:text-xl bg-red-500 rounded-full px-2">
                      {item.area}
                    </sup>
                  </h1>
                  <div className="md:flex justify-between md:gap-5">
                    <p className="text-sm md:text-lg">{item.price}</p>
                    <p className="text-sm md:text-lg">{item.location}</p>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeBanner;
