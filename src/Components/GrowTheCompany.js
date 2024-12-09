import React from 'react'
import './GrowTheCompany.css';
import CardsSlider from './CardsSlider';

export default function GrowTheCompany() {
  return (
    <div className='grow-up-container'>
             <div className='grow-up-content-d'>
             <div className='grow-up-content-right-d'>
                 <h2>grow <span>faster</span> than ever</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim.</p>
             </div>

             <div className='grow-up-content-left-d'>
                <div className='grow-up-content-arrow '><img src="/Images/left-icon.svg" alt="" /></div>
                <div className='grow-up-content-arrow'><img src="/Images/right-icon.svg" alt="" /></div>
             </div>
          </div>

          <CardsSlider/>
    </div>
  )
}
