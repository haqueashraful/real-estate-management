import Banner from "../Component/Banner";
import EstateCard from "../Component/EstateCard";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import {useLoaderData} from "react-router-dom";

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
      <EstateCard />
    </div>
  );
};

export default Home;
