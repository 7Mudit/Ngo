import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import logo from "../../images/udaan4.png";
// import logo from "../../images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show !== isScrolled) setIsScrolled(show);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <>
      <div className="navbar_section_one">
        <div className="icons">
          <FaFacebookF />
          <BsTwitter />
          <AiOutlineInstagram />
          <GrLinkedinOption />
          <BsYoutube />
          <BsTiktok />
        </div>

        <h4>About Us</h4>
        <h4>Contact Us</h4>
      </div>
      {/* <div className="navbar_section_two"> */}
      <div className={`navbar_section_two ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar_section_two_image">
          <img src={logo} alt="Not found" />
        </div>
        <div className="navbar_section_two_links">
          <div className="item">UDAAN Conditions</div>
          <div className="item">If You Suspect</div>
          <div className="item">Get Involved</div>
          <div className="item">Research</div>
          <div className="item">Resources</div>
          <div className="item">Drugs to Avoid</div>
        </div>
        <div className="navbar_section_two_sebu">
          <div className="icons icon-size">
            <VscSearch />
          </div>
          <button>Donate</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
