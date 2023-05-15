import React from "react";
import "./CardSection.css";
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'

const cardData = [
  {
    id: 1,
    img: img1,
    title: "SADS Research Survey",
    description:
      "We’re working with companies who are almost ready to recruit participants for first-of-their-kind clinical trials for new therapies. Take our ten-minute survey to help us learn more about you so we can help connect you to research studies you might be eligible to participate in.",
  },
  {
    id: 2,
    img: img2,
    title: "Living With SADS Webinars",
    description:
      "Join our top experts who will share their knowledge and advice on topics important to living and thriving with a SADS condition.",
  },
  {
    id: 2,
    img: img3,
    title: "Your Voice Matters!",
    description:
      "We’re bringing the ARVC patient community together for a first ever EL-PFDD. It’s critical for our ARVC community to participate in the meeting in an effort to show strength in numbers.",
  },
  {
    id: 2,
    img: img4,
    title: "30 Years of The SADS Foundation",
    description:
      "The SADS Foundation was established on December 12, 1991 by Dr. Vincent and several dedicated colleagues and LQTS family members for the purpose of helping to prevent sudden and unexpected cardiac death in children and in young adults. Read more about our history.",
  },
];

const CardSection = () => {
  return (
    <div className="card_section">
      <h3>
        Welcome to the <span>SADS Foundation.</span>
      </h3>
      <p>
        Established on December 12, 1991 by Dr. Michael Vincent, The SADS
        Foundation is a community of families, medical professionals, and
        supporters saving lives and advancing care for people with heart
        arrhythmia conditions that can lead to sudden death.
      </p>
      <div className="card_section_cards">
        {cardData.map((card) => (
          <div className="card-box" key={card.id}>
          <div className="card-box-img">
            <img src={card.img} alt="" />
          </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="card-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
