import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafLetComponent = () => {
  const position = [51.505, -0.09]; 

  return (
    <>
    <div>
    <h1 className="text-5xl font-bold text-center my-10">Leaflet Component</h1>
    </div>
    <div style={{ height: "400px", width: "100%" }} className="my-5">
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
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
