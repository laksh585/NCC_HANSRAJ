import React, { useState } from "react";
import "./Gallery.css"; 
import GUARD from '../../images/GUARD.JPG'
import ADGDEL from '../../images/ADGDEL.jpg'
import CDS from '../../images/CDS.jpg'
import ARMY from '../../images/ARMY.jpg'
import AIR from '../../images/AIR.jpg'
import SNIC1 from '../../images/SNIC1.jpg'
//import SNIC2 from '../../images/SNIC2.jpg'
import NAAC from '../../images/NAAC.jpg'
import IMG1 from '../../images/IMG1.jpg'
//import image3 from '../../images/image3.jpg'

const Gallery = () => {
  const achievementsData = [
    {
      title: "GUARD OF HONOR 24",
      image: GUARD, 
      description: "Our Cadets Participated in Guard Of Honor in Republic Day Program 24 Held in Hansraj College",
    },
    {
      title: "RDC 23",
      image: ADGDEL,
      description: "Description for Award 2.",
    },
    {
      title: "ATC 24",
      image: CDS,
      description: "Description for Award 3.",
    },
    {
      title: "AAT 24",
      image: AIR,
      description: "Description for Award 3.",
    },
    {
      title: "IDC 24",
      image: ARMY,
      description: "Description for Award 3.",
    },
    {
        title: "Clean Drive 24",
        image: IMG1,
        description: "Description for Award 3.",
      },
    {
        title: "SNIC 24",
        image: SNIC1,
        description: "Description for Award 3.",
      },
    {
        title: "NAAC 23",
        image: NAAC,
        description: "Description for Award 3.",
      },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="achievements-container">
      <h2>Our Achievements</h2>
      <div className="achievement-gallery">
        {achievementsData.map((achievement, index) => (
          <div key={index} className={`achievement-box ${hoveredIndex === index ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <div className="achievement-title">
              <h3>{achievement.title}</h3>
            </div>
            <img
              src={achievement.image}
              alt={achievement.title}
              className="achievement-image"
            />
            <div className={`achievement-description ${hoveredIndex === index ? "visible" : ""}`}>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;