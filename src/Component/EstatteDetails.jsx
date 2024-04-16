import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { useLoaderData, useParams } from "react-router-dom";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";
const EstateDetails = () => {
  const {loader} = useContext(MyContext)
  const data = useLoaderData()
  const { id } = useParams();
  const detailsData = data.find((item) => item.id === parseInt(id));
  const { estate_title, description, price, status, area, location, facilities, image } = detailsData;

  if(loader){
    return <Loading />
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <Helmet>
        <title>{estate_title}</title>
      </Helmet>
      <div className="mb-4">
        <img src={image} alt={estate_title} className="w-full h-auto rounded-lg" />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-2">{estate_title}</h1>
        <p className="text-gray-700 mb-2">{description}</p>
        <div className="flex items-center text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.654 0-3.248 2.099-4.879 6 1.631 3.901 4.227 6 6.879 6h3.758c2.651 0 4.879-2.099 6.879-6-1.631-3.901-4.227-6-6.879-6h-3.758z" />
          </svg>
          <span>{`${area} Sq ft`}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8s-4.56 1.39-7 4m0 0v4a3 3 0 0 0 6 0v-4m-7 4s-1.56-1.39-3-4m0 0v-4a3 3 0 0 1 6 0v4" />
          </svg>
          <span>{`${price} per month`}</span>
        </div>
        <div className="text-sm text-gray-500">Status: {status}</div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Facilities:</h2>
          <ul className="list-disc list-inside text-gray-700">
            {facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
