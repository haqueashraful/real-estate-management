import Banner from "../Component/Banner";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import {useLoaderData} from "react-router-dom";
import EstateSection from "../Component/EstateSection";
import SwipeBanner from "../Component/SwipeBanner";
import Loading from "../Component/Loading";

const Home = () => {
  const {loading} = useContext(MyContext)
  const data = useLoaderData();
  if(loading){
    return <Loading/>
  }

  return (
    <div>
      <Banner />
      <EstateSection  data={data}/>
      <SwipeBanner/>
    </div>
  );
};

export default Home;
