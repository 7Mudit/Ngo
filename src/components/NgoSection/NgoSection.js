import React, { useEffect, useState } from "react";
import "./NgoSection.css";

const NgoSection = ({ location }) => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    const map = new window.google.maps.Map(document.createElement("div"));
    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      query: `NGOs in ${location}`,
      fields: ["place_id", "name", "rating", "formatted_address"],
    };
  
    service.textSearch(request, (results, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        results
      ) {
        setNgos(results);
      }
    });
  }, [location]);

  const handleSendRequest = (ngo) => {
    console.log(`Sending request to ${ngo.name}`);
    // Here you can implement the logic for sending the request
  };

  return (
    <div className="ngo-section">
      <h2>NGOs around {location}</h2>
      {ngos.map((ngo, index) => (
        <div key={index} className="ngo-item">
          <h3>{ngo.name}</h3>
          <p>Rating: {ngo.rating}</p>
          <p>Address: {ngo.formatted_address}</p>
          <button onClick={() => handleSendRequest(ngo)}>Send Request</button>
        </div>
      ))}
    </div>
  );
};

export default NgoSection;
