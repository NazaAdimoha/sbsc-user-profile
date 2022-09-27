import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import GoogleMap from "../../assets/google_map.jpg"

const Geolocation = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <>
      <Navbar />

      <main>
        <img src={GoogleMap} className="object-cover w-2/3 h-1/3" alt="map" />
        <button className="py-4 px-6 duration-75 shadow-md rounded-lg ring-offset-neutral-600" onClick={getLocation}>
          Get Location
        </button>
        <h1 className="text-3xl text-stone-700">Coordinates</h1>
        <p className="text-stone-700">Latitude: {status}</p>

        {lat && <p className="text-stone-700">Latitude: {lat}</p>}
        {long && <p className="text-stone-700">Longitude: {long}</p>}
      </main>
    </>
  );
};

export default Geolocation;
