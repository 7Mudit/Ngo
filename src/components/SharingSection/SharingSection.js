import React from "react";
import "./SharingSection.css";
import woman from "../../images/woman.jpeg";

const SharingSection = () => {
  return (
    <div className="sharing-section">
      <div className="sharing-section-card">
        <div className="sharing-section-card-image">
          <img src={woman} alt="Not found" />
        </div>
        <div className="sharing-section-card-content">
          <h3>
            Sharing Your <span>Stories</span>
          </h3>
          <p>
            UDAAN conditions are rare, but you are not alone. Here, you will find
            a community of understanding, support and guidance from others who
            are navigating life with a UDAAN condition. We welcome you to browse
            others’ stories and to contribute your own.
          </p>
          <div className="sharing-section-card-content-one">
            <div className="sharing-section-card-content-one-image">
              <img
                src="https://www.sads.org/wp-content/uploads/2021/02/blog-icon.png"
                alt=""
              />
            </div>
            <div className="sharing-section-card-content-one-text">
              <h3>UDAAN Channel Stories</h3>
              <p>
                Members of the UDAAN community share their perspectives and
                experiences living with or parenting a child with a UDAAN
                condition.
              </p>
            </div>
          </div>
          <div className="sharing-section-card-content-two">
            <div className="sharing-section-card-content-two-image">
              <img
                src="https://www.sads.org/wp-content/uploads/2021/02/healing-wall-icon.png"
                alt=""
              />
            </div>
            <div className="sharing-section-card-content-two-text">
                <h3>Healing Wall</h3>
                <p>Families share memories and legacies of their children, spouses, and loved ones who died from a heart arrhythmia condition.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharingSection;
