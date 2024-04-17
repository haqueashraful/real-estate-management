import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context/MyContext";
import { useLoaderData, useParams } from "react-router-dom";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TbChartArea } from "react-icons/tb";
import { IoPricetagOutline } from "react-icons/io5";

const EstateDetails = () => {
  const { loader } = useContext(MyContext);
  const data = useLoaderData();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const detailsData = data.find((item) => item.id === parseInt(id));


  const {
    estate_title,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = detailsData;

  useEffect(() => {
    const favoriteEstates = JSON.parse(localStorage.getItem("favorite_estates")) || [];
    setIsFavorite(favoriteEstates.some((estate) => estate.id === detailsData.id));
  }, [detailsData]);

  const handleToggleFavorite = () => {
    const favoriteEstates = JSON.parse(localStorage.getItem("favorite_estates")) || [];

    if (isFavorite) {
      const updatedFavorites = favoriteEstates.filter((estate) => estate.id !== detailsData.id);
      localStorage.setItem("favorite_estates", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favoriteEstates, detailsData];
      localStorage.setItem("favorite_estates", JSON.stringify(updatedFavorites));
    }

    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  if (loader) {
    return <Loading />;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <Helmet>
        <title>{estate_title}</title>
      </Helmet>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <h1 className="text-xl font-bold mb-2">{estate_title}</h1>
          <button onClick={handleToggleFavorite}>
            {isFavorite ? (
              <FaHeart className="w-5 h-5 mb-2 text-red-500" />
            ) : (
              <FaRegHeart className="w-5 h-5 mb-2" />
            )}
          </button>
        </div>
        <h1 className="text-sm font-bold bg-green-400 rounded-full px-2 text-white">
          Status:<span className="text-lg"> {status}</span>
        </h1>
      </div>
      <div className="mb-4">
        <img src={image} alt={estate_title} className="w-full h-[400px] rounded-lg" />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-gray-700 mb-2">{description}</p>
        <div className="flex items-center gap-3 text-gray-500 mb-2">
          <CiLocationOn />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-500 mb-2">
          <TbChartArea />
          <span>{`${area} Sq ft`}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-500 mb-2">
          <IoPricetagOutline />
          <span>{`${price} per month`}</span>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Facilities:</h2>
          <ul className="list-disc list-inside flex justify-between items-center text-gray-700">
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
