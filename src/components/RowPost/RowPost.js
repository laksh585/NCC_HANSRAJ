import React from 'react'
import './RowPost.css'
import DGNCC from '../../images/DGNCC.jpg'
import ADGDEL from '../../images/ADGDEL.jpg'
import CDS from '../../images/CDS.jpg'
import ARMY from '../../images/ARMY.jpg'
import AIR from '../../images/AIR.jpg'
import NAVY from '../../images/NAVY.jpg'

function RowPost() {
  return (
    <div className='row'>
        <h2>Title</h2>
        <div className='posters'>
        <img className='poster' src={DGNCC} alt="CDS" />
        <img className='poster' src={ADGDEL} alt="CDS" />
        <img className='poster' src={CDS} alt="CDS" />
        <img className='poster' src={ARMY} alt="CDS" />
        <img className='poster' src={AIR} alt="CDS" />
        <img className='poster' src={NAVY} alt="CDS" />
        </div>
    </div>
  )
}

export default RowPost