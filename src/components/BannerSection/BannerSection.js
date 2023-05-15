import React from "react";
import "./BannerSection.css";

const BannerSection = () => {
  return (
    <div className="bannerSection">
      <div className="bannerSectionLeft">
        <h3>Get Involved</h3>
        <p>
          Connect with families who share a similar experience,
          give back, or help drive change around medical research, legislation,
          or awareness-building. Join us in making an impact!
        </p>
        <button>Learn More</button>
      </div>
      <div className="bannerSectionRight">
        <img src="https://www.sads.org/wp-content/uploads/2020/12/mother-and-daughter-join-hands-in-heart-shape.jpg" alt="Not Found" />
      </div>
    </div>
  );
};

export default BannerSection;
