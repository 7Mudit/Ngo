import React, { useState , useEffect } from "react";
import "./DonationForm.css";
import { motion } from "framer-motion";

const DonationForm = ({isFormSubmitted,location,setLocation}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    donationType: "Money",
    otherDonationType: "", // new field for the other type of donation
    message: "",
    location:"",
    recurring: false,
    agree: false,
  });

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setLocation(formData.location)
    isFormSubmitted(true);
  }



  return (
    <motion.div
      className="donation-form"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          required
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          required
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          required
          onChange={handleChange}
          value={formData.address}
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          required
          onChange={handleChange}
          value={formData.location}
        />
        <label>
          <h2 className="dontation-h2">Donation type</h2>
          <select
            name="donationType"
            value={formData.donationType}
            onChange={handleChange}
          >
            <option value="Money">Money</option>
            <option value="Other">Anything Else</option>
          </select>
        </label>
        {/* Show this field only if the donationType is "Other" */}
        {formData.donationType === "Other" && (
          <input
            name="otherDonationType"
            type="text"
            placeholder="What would you like to donate?"
            required
            onChange={handleChange}
            value={formData.otherDonationType}
          />
        )}
        <textarea
          name="message"
          placeholder="Leave a message (optional)"
          onChange={handleChange}
          value={formData.message}
        />
        <div className="checkbox">
          <input
            type="checkbox"
            id="recurring"
            name="recurring"
            checked={formData.recurring}
            onChange={handleChange}
          />
          <label htmlFor="recurring">Make this a recurring donation</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            required
            checked={formData.agree}
            onChange={handleChange}
          />
          <label htmlFor="agree">I agree with the terms and conditions</label>
        </div>
        <button type="submit">Donate</button>
      </form>
    </motion.div>
  );
};

export default DonationForm;
