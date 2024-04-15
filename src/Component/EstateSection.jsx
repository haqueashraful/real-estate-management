import { useContext } from "react";
import EstateCard from "./EstateCard";
import { MyContext } from "../Context/MyContext";

const EstateSection = () => {
  const { myData } = useContext(MyContext);
  console.log(myData)


  return (
    <div className="my-9">
      <div>
        <h1 className="text-3xl font-bold mb-4">Estate Section</h1>
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {
        myData.map((item) => <EstateCard item={item} key={item.id}/>)
      }
     </div>
    </div>
  );
};

export default EstateSection;
