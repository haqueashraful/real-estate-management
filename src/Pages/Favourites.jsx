import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Favourites = () => {
  const [favoriteEstates, setFavoriteEstates] = useState([]);


  useEffect(() => {
    const getFromLocalStorage = () => {
        const localData = localStorage.getItem("favorite_estates"); 
        const favoriteEstatesData = JSON.parse(localData) || []; 
        setFavoriteEstates(favoriteEstatesData); 
      };

     getFromLocalStorage();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Favorite Estates</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Favorite Estates</h1>
      {favoriteEstates.length === 0 ? ( 
        <p>No favorite estates found.</p>
      ) : (
        <div>
          {favoriteEstates.map((item) => ( 
            <div key={item.id} className="border p-4 rounded-lg flex gap-8">
              <img
                src={item.image}
                alt={item.estate_title}
                className="w-1/3 h-40 object-cover mb-4 rounded-lg"
              />
              <div>
                <h2 className="text-xl font-bold mb-2">{item.estate_title}</h2>
                <p className="text-lg text-gray-600 mb-2">{item.description}</p>
                <p className="text-lg text-gray-500 mb-2">{item.location}</p>
                <p className="text-lg text-gray-500">{item.price} per month</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
