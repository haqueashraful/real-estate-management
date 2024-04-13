
const EstateCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="oceanfront-penthouse.jpg"
        alt="Oceanfront Penthouse"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Luxury Real Estate</div>
        <div className="text-gray-700 text-base">Three Room Apartment</div>
        <div className="flex items-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 8s-4.56 1.39-7 4m0 0v4a3 3 0 0 0 6 0v-4m-7 4s-1.56-1.39-3-4m0 0v-4a3 3 0 0 1 6 0v4"
            />
          </svg>
          <span className="text-gray-500">
            999 Rue du Marais, Québec, QC G1M 319
          </span>
        </div>
        <div className="flex items-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.654 0-3.248 2.099-4.879 6 1.631 3.901 4.227 6 6.879 6h3.758c2.651 0 4.879-2.099 6.879-6-1.631-3.901-4.227-6-6.879-6h-3.758z"
            />
          </svg>
          <span className="text-gray-500">
            Beds: 3 Baths: 3 Sq ft: 200 Rooms: 8
          </span>
        </div>
        <div className="flex items-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <span className="text-gray-500">$2,000.00 per month</span>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
