import React from 'react';
import './NCCH.css';
import DGNCC from '../../images/DGNCC.jpg'
import ADGDEL from '../../images/ADGDEL.jpg'
import CDS from '../../images/CDS.jpg'
import ARMY from '../../images/ARMY.jpg'
import AIR from '../../images/AIR.jpg'
import NAVY from '../../images/NAVY.jpg'
import Gallery from '../Gallery/Gallery'


const NCCH = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">OUR RANK PANEL</h1>
      </header>

      <section className="leadership">
        <div className="leadership-item">
          <img src={DGNCC} alt="SUO 1" className="leadership-image" />
          <h3 className="leadership-name">SUO 1 Name</h3>
        </div>
        <div className="leadership-item">
          <img src={NAVY} alt="SUO 2" className="leadership-image" />
          <h3 className="leadership-name">SUO 2 Name</h3>
        </div>
      </section>

      <section className="officers">
        <div className="officers-row">
          <div className="officer-item">
            <img src={ADGDEL} alt="JUO 1" className="officer-image" />
            <p className="officer-name">JUO 1 Name</p>
          </div>
          <div className="officer-item">
            <img src={ADGDEL} alt="JUO 2" className="officer-image" />
            <p className="officer-name">JUO 2 Name</p>
          </div>
          <div className="officer-item">
            <img src={ADGDEL} alt="JUO 3" className="officer-image" />
            <p className="officer-name">JUO 3 Name</p>
          </div>
          <div className="officer-item">
            <img src={ADGDEL} alt="JUO 4" className="officer-image" />
            <p className="officer-name">JUO 4 Name</p>
          </div>
          <div className="officer-item">
            <img src={ADGDEL} alt="JUO 5" className="officer-image" />
            <p className="officer-name">JUO 5 Name</p>
          </div>
        </div>
        <div className="officers-row">
          <div className="officer-item">
            <img src={ARMY} alt="CQSM 1" className="officer-image" />
            <p className="officer-name">CQSM 1 Name</p>
          </div>
          <div className="officer-item">
            <img src={AIR} alt="CQSM 2" className="officer-image" />
            <p className="officer-name">CQSM 2 Name</p>
          </div>
          <div className="officer-item">
            <img src={CDS} alt="CQSM 3" className="officer-image" />
            <p className="officer-name">CQSM 3 Name</p>
          </div>
          <div className="officer-item">
            <img src={DGNCC} alt="CQSM 4" className="officer-image" />
            <p className="officer-name">CQSM 4 Name</p>
          </div>
          <div className="officer-item">
            <img src={ADGDEL} alt="CQSM 5" className="officer-image" />
            <p className="officer-name">CQSM 5 Name</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2 className="section-title">About NCC Hansraj</h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a libero
          at felis volutpat efficitur. Donec mattis, tortor sit amet egestas
          bibendum, sem neque pretium risus, sit amet scelerisque elit dolor sed
          arcu. Donec aliquet purus in nibh suscipit, vel consectetur ex
          tincidunt. Sed vel eros id sem porta semper. Sed ac velit sit amet
          magna lobortis fermentum at id nibh. Nulla facilisi. Proin id purus
          sed turpis posuere molestie. In hac habitasse platea dictumst. Maecenas
          in turpis lectus. Mauris id est at magna malesuada fermentum at et
          libero. Maecenas ac orci sit amet quam gravida egestas ut et tellus.
        </p>
      </section>

      <section className="achievement-gallery">
        <Gallery></Gallery>
      </section>

      
      <footer className="Footer">
        <p className="footer-text">
          &copy; 2023 NCC Hansraj. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NCCH;