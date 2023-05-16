import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import DonationForm from "../components/DonationForm/DonationForm";
import NgoSection from "../components/NgoSection/NgoSection";

const DonatePage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [location,setLocation] = useState('')
  const [email,setEmail] = useState('')
  return (
    <div>
      <Navbar />
      {!isFormSubmitted ? (
        <DonationForm isFormSubmitted={setIsFormSubmitted} location = {location} setLocation = {setLocation}
          setEmail={setEmail}
        /> 
      ) : (
        <NgoSection location={location}  email={email}/>
      )}
    </div>
  );
};

export default DonatePage;
