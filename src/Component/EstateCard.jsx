const EstateCard = ({ item }) => {
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
    image
  } = item;

  return (
    <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={estate_title}
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{estate_title}</h2>
        <p className="text-gray-600 text-sm mb-2">{segment_name}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-800 font-bold">{price}</p>
          <span
            className={`${
              status === 'available' ? 'text-green-500' : 'text-red-500'
            } font-semibold`}
          >
            {status}
          </span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">Area: {area} sq ft</p>
          <p className="text-sm text-gray-600">Location: {location}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-600 font-semibold">Facilities:</p>
          <ul className="text-sm text-gray-700 flex justify-between items-center">
            {facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-6 pb-4">
        <p className="text-sm text-gray-600">ID: {id}</p>
      </div>
    </div>
  );
};

export default EstateCard;
