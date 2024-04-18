import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import CardSkeleton from "./CardSkeleton";
import PropTypes from "prop-types";

const EstateCard = ({ item }) => {
  const navigate = useNavigate();
  const {loader} = useContext(MyContext)
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = item;

  if(loader){
    return <CardSkeleton></CardSkeleton>
  }

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={estate_title}
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{estate_title}</h2>
        <span className="text-lg px-5 rounded-full mb-2 bg-green-200 text-black">{segment_name}</span>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mb-4">
          <p className="text-gray-800 font-bold">{price}</p>
         
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg text-gray-600 flex flex-col"><span className=" border-b-2 font-black border-green-600">Area:</span> <span className="font-bold">{area}</span></p>
          <p className="text-lg text-gray-600 flex flex-col"><span className=" border-b-2 font-black border-green-600">Location:</span> <span className="font-bold">{location}</span></p>
        </div>
        <div className="mb-4">
          <p className="text-lg text-gray-600 font-semibold">Facilities:</p>
          <ul className="text-base text-gray-700 flex justify-between items-center">
            {facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate(`/estatedetails/${id}`)}
        >
          View Property
        </button>
      </div>
        <div className="absolute top-5 left-0 bg-red-500 rounded-r-full text-white pl-5 ">
          <p className="text-lg font-bold text-white px-2">{id}</p>
        </div>
        <div className="absolute top-5 right-0 bg-red-500 rounded-l-full text-white pr-5 ">
        <span
            className=' font-bold text-lg px-2 rounded-xl text-white'
          >
            {status}
          </span>
        </div>
    </div>
  );
};


EstateCard.propTypes = {
  item: PropTypes.object.isRequired,
}
export default EstateCard;
