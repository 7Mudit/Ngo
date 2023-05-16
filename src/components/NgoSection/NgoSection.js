import React, { useEffect, useState } from "react";
import "./NgoSection.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NgoSection = ({ location, email }) => {
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

  const handleSendRequest = async (ngo) => {
    console.log(`Sending request to ${ngo.name}`);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/send-email",
        {
          email: email,
          ngo: ngo,
        }
      );
      console.log(response.data);
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending the email");
    }
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
