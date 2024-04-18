import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from '../assets/address-icon.png';

const LeafLetComponent = () => {
  const position = [51.505, -0.09];
  
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [35, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })
  return (
    <>
    <div>
    <h1 className="lg:text-5xl text-3xl font-bold text-center my-10">Leaflet Section</h1>
    </div>
    <div  className="my-5 w-full h-72 md:h-96">
      <MapContainer className=" rounded-lg" center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty LeafLet <br /> Using in Assignment 9 .
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </>
  );
};

export default LeafLetComponent;
