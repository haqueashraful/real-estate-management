import Banner from "../Component/Banner";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import {useLoaderData} from "react-router-dom";
import EstateSection from "../Component/EstateSection";
import Loading from "../Component/Loading";
import { Helmet } from "react-helmet-async";
import LeafLetComponent from "../Component/LeafLetComponent";

const Home = () => {
  const {loading} = useContext(MyContext)
  const data = useLoaderData();
  if(loading){
    return <Loading/>
  }
  return (
    <div>
      <Helmet>
        <title>Real-Estate-Home</title>
      </Helmet>
      <Banner />
      <EstateSection  data={data}/>
      <LeafLetComponent />
    </div>
  );
};

export default Home;
