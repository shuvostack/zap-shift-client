import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);
  //   console.log(serviceCenters);

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      // go to the location
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <section className="bg-white my-12 p-16 rounded-2xl">
      <h2 className="text-5xl text-secondary font-bold">
        We are available in 64 districts
      </h2>
      <div>
        {/* search */}
        <form onSubmit={handleSearch}>
          <label className="input rounded-3xl mt-10">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              className="grow"
              placeholder="Search"
            />
          </label>
        </form>

        {/* Divider */}
        <div className="flex w-full flex-col my-12">
          <div className="divider"></div>
        </div>
      </div>

      <h3 className="text-secondary text-2xl font-bold mb-10">We deliver almost all over Bangladesh</h3>

      {/* Map section */}
      <div className="max-w-6xl mx-auto">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[350px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                Service Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
