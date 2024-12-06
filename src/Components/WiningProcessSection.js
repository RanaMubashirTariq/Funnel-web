import React from 'react'
import './WiningProcessSection.css'


export default function WiningProcessSection() {
  return (
    <div className='wining-process-container'>
          <div className='wining-content-d'>
             <div className='wining-content-right-d'>
                 <h2>Our <span>Winning</span> Process</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim.</p>
             </div>

             <div className='wining-content-left-d'>
                <div className='wining-content-arrow'><img src="/Images/left-icon.svg" alt="" /></div>
                <div className='wining-content-arrow'><img src="/Images/right-icon.svg" alt="" /></div>
             </div>
          </div>

          {/* part-2 for cards */}
             <div className='wining-cards-container'>
                    <div className='wining-card-d'>
                        <div className='wining-card-content'>
                            <h2>Lorem ispum</h2>
                            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
                        </div>
                    </div>

                    {/* card-2*/}
                    <div className='wining-card-d'>
                        <div className='wining-card-content'>
                            <h2>Lorem ispum</h2>
                            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className='wining-card-d'>
                        <div className='wining-card-content'>
                            <h2>Lorem ispum</h2>
                            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className='wining-card-d-4'>
                        <div className='wining-card-content'>
                            <h2>Lorem ispum</h2>
                            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
                        </div>
                    </div>
                    {/* card-5 */}
                    <div className='wining-card-d-4'>
                        <div className='wining-card-content'>
                            <h2>Lorem ispum</h2>
                            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
                        </div>
                    </div>
             </div>
    </div>
  )
}
