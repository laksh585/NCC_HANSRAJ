import React from 'react'
import principal from '../../images/principal.jpg'
import Anomam from '../../images/Anomam.jpg'
import Anosir from '../../images/Anosir.jpg'
import './Desk.css';
function Desk() {
    return (
        <div className="container">
            <div className="card_p">
                <img className='big-card img' src={principal} alt="Principal" width="200" />
                <div class="blockquote-container">
                    <h2 className='princidesk'>From Principal's Desk</h2>
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo risus.
                        Maecenas consequat sem id mi fringilla, vitae scelerisque mi accumsan.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo risus.
                        Maecenas consequat sem id mi fringilla, vitae scelerisque mi accumsan.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo risus.
                        Maecenas consequat sem id mi fringilla.
                    </blockquote>
                </div>
            </div>
            <br></br>
            <div className='card_q'>
                <h2 className='anodesk'>From ANO's Desk</h2>
                <br></br>
                <div className='small-cards'>
                    <div className="card">
                        <img className='img1' src={Anomam} alt="Ano 1" width="200" />
                        <div className='blocktin1'>
                            <blockquote className='anoq'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo risus.
                                Maecenas consequat sem id mi fringilla, vitae scelerisque mi accumsan.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo risus.
                                
                            </blockquote>
                        </div>
                    </div>
                    <div className="card">
                        <img className='img2' src={Anosir} alt="Ano 2" width="200" />
                        <div className='blocktin2'>
                            <blockquote className='anoq'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo risus.
                                Maecenas consequat sem id mi fringilla, vitae scelerisque mi accumsan.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo risus.
                               
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Desk