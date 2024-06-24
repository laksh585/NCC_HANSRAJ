import React,{useState,useEffect} from 'react';
import './AboutUs.css';
import NCCTimeline from './NCCTimeline';
import RowPost from '../RowPost/RowPost';
//import nccImage from './nccImage.jpg'; // Example image import
//import timelineImage from './timelineImage.jpg'; // Example timeline image import

const AboutUs = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 500);
  }, []);
  return (
    <div className="about-us">
      <section className="quote-section"> 
        <div className="quote-container">
          <h1 className="quote-text">
            <span className="hindi-font">"एकता और अनुशासन"</span>
          </h1>
        </div>
      </section>
            <RowPost></RowPost>
      <section className="ncc-song">
        <h2 className="song-title">NCC Song</h2>
        <div className="song-lyrics">
          <p>
            Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain <br></br>
              Apni Manzil Ek Hai,<br></br>
              Ha, Ha, Ha, Ek Hai,<br></br>
              Ho, Ho, Ho, Ek Hai.<br></br>
              Hum Sab Bharatiya Hain.<br></br>
              Kashmir Ki Dharti Rani Hai,<br></br>
              Sartaj Himalaya Hai,<br></br>
              Saadiyon Se Humne Isko Apne Khoon Se Pala Hai<br></br>
              Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge,<br></br>
              Hum Shamshir Utha Lenge.<br></br>            
              Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai,<br></br>
              Ha, Ha, Ha, Ek Hai<br></br>
              Hum Sab Bharatiya Hai.<br></br>
              Mandir Gurudwaare Bhi Hain Yahan<br></br>
              Aur Masjid Bhi Hai Yahan<br></br>
              Girija Ka Hai Ghariyaal Kahin<br></br>
              Mullah ki Kahin Hai Ajaan<br></br>
              Ek Hee Apna Ram Hain, Ek hi Allah Taala Hai,<br></br>
              Ek Hee Allah Taala Hain, Raang Birange Deepak Hain Hum,<br></br>
              lekin Jagmag Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai.<br></br>
              Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain.
          </p>
          {/* Add more song lyrics here */}
        </div>
        <audio controls className="audio-player">
          <source src="path/to/your/ncc-song.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section>
      <div className="section-container"> 
      <section className={`section history animated-box ${isAnimated ? 'animated' : ''}`}>
        <h2>History</h2>
        <p>The NCC was established with the aim of developing character, discipline, leadership, and a secular outlook among young citizens. Since its inception, the NCC has played a pivotal role in shaping the future of many individuals, fostering a sense of duty and patriotism.</p>
      </section>

      <section className={`section mission-values animated-box ${isAnimated ? 'animated' : ''}`}>
        <h2>Mission & Values</h2>
        <p>Our mission is to create disciplined and responsible citizens who contribute to the community and the nation. The NCC values integrity, unity, and selfless service.</p>
      </section>

      <section className={`section programs animated-box ${isAnimated ? 'animated' : ''}`}>
        <h2>Programs</h2>
        <ul>
          <li>Community Service Initiatives</li>
          <li>Adventure Activities</li>
          <li>Leadership Camps</li>
          <li>Social Awareness Programs</li>
        </ul>
      </section>

      <section className={`section benefits animated-box ${isAnimated ? 'animated' : ''}`}>
        <h2>Benefits</h2>
        <p>NCC provides a platform for students to develop essential life skills, engage in community service. It offers opportunities for personal growth, character development, and leadership training, making it significant in shaping the overall personality of individuals</p>
      </section>
      
       
      <section className="section-timeline">
        <h2>Journey Through Time</h2>
        <NCCTimeline/>
      </section>
      </div>
    </div>
  );
};

export default AboutUs;
