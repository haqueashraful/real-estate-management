import { useContext } from "react";
import Loading from "./Loading";
import SwipeBanner from "./SwipeBanner";
import { MyContext } from "../Context/MyContext";

const Banner = () => {
  const { loader } = useContext(MyContext);

  if (loader) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <SwipeBanner />
    </div>
  );
};

export default Banner;
