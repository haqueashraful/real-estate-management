import SwiperSlider from "./SwiperSlider";
import img from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className=" bg-cover bg-no-repeat w-full flex justify-between items-center p-14"
    >
      <div>
        <h1>Find Your <span>suitable</span> Home</h1>
      </div>
      <div className=" w-1/3">
        <SwiperSlider />
      </div>
    </div>
  );
};

export default Banner;
