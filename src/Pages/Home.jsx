import Banner from "../Component/Banner";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import {useLoaderData} from "react-router-dom";
import EstateSection from "../Component/EstateSection";
import SwipeBanner from "../Component/SwipeBanner";

const Home = () => {
  const { myData } = useContext(MyContext);
  const data = useLoaderData();
  console.log(data)
  console.log(myData)
  if (!myData) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <EstateSection />
      <SwipeBanner/>
    </div>
  );
};

export default Home;
