import React from "react";
import "./FooterSection.css";
import logo from "../../images/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const FooterSection = () => {
  return (
    <>
    <div className="footer-section">
      <div className="footer-section-one">
        <img src={logo} alt="Not found" />
        <div className="footer-icon">
          <FaFacebookF />
          <BsTwitter />
          <AiOutlineInstagram />
          <GrLinkedinOption />
          <BsYoutube />
          <BsTiktok />
        </div>
      </div>

      <div className="footer-section-two">
        <h3>Office Address</h3>
        <h4>4527 South 2300 East, </h4>
        <h4>Suite 104 Salt Lake City,</h4>
        <h4>UT 84117-4448</h4>

        <h3>Call our Resource Center</h3>
        <h4>1 (801) 948-0654</h4>
      </div>
      <div className="footer-section-three">
        <h3>Join Our Email List</h3>
        <button>Sign Up For Updates</button>
      </div>
      <div className="footer-section-four">
        <ul>
          <li>
            Contact Resource Center{" "}
            <IoIosArrowForward className="footer-section-four-icon" />
          </li>
          <li>
            Contact US{" "}
            <IoIosArrowForward className="footer-section-four-icon" />
          </li>
          <li>
            Email US <IoIosArrowForward className="footer-section-four-icon" />
          </li>
          <li>
            SADS International
            <IoIosArrowForward className="footer-section-four-icon" />
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-section-oneLiner">
    © 2023 All Rights Reserved. 
    </div>
    </>

  );
};

export default FooterSection;
