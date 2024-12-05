import React from 'react'
import './AgenciesCard.css';

export default function AgenciesCard() {
  return (
    <div className='agencies-card-d'>
           <div className='content-part'>
                 <div className='content-right-part'>
                      <h2>Trusted <span>50+</span> Agencies</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim.</p>
                 </div>
                 <div className='content-left-part'><button>View All</button></div>
           </div>

           {/* part-2 for card */}
            <div className='agencies-cards-container'>
                <div className='card-d pic-d'>
                    <div className='inner-card-content-d'>
                        <div className='inner-card-content-heading'><h2>JIMMY CARTER</h2></div>
                        <div className='inner-card-content-paragraph'><p>Co-founder Vizz</p></div>
                    </div>
                </div>

                {/* card-2 */}
                <div className='card-d-2 pic-d'>
                    <div className='inner-card-content-d'>
                        <div className='inner-card-content-heading'><h2>K.JENI ALBERT</h2></div>
                        <div className='inner-card-content-paragraph'><p>COO Wexzab Labs</p></div>
                    </div>
                </div>
                
                {/* card-3 */}
                <div className='card-d-3 pic-d'>
                    <div className='inner-card-content-d'>
                        <div className='inner-card-content-heading'><h2>JOHNNY LIA</h2></div>
                        <div className='inner-card-content-paragraph'><p>Founder SK Labs</p></div>
                    </div>
                </div>
                {/* card-4 */}
                <div className='card-d-4 pic-d'>
                    <div className='inner-card-content-d'>
                        <div className='inner-card-content-heading'><h2>MAXWELL LEE</h2></div>
                        <div className='inner-card-content-paragraph'><p>Marketing Officer Teli Co.</p></div>
                    </div>
                </div>
                {/* card-5 */}
                <div className='card-d-5 pic-d'>
                    <div className='inner-card-content-d'>
                        <div className='inner-card-content-heading'><h2>ALBERT JANN</h2></div>
                        <div className='inner-card-content-paragraph'><p>Co-founder Razi Cabs</p></div>
                    </div>
                </div>
                {/* card-6 */}
                <div className='card-d-6 pic-d'>
                    <div className='inner-card-content-d'>
                        <div className='inner-card-content-heading'><h2>KENI.M</h2></div>
                        <div className='inner-card-content-paragraph'><p>Marketing Officer Gitlabs</p></div>
                    </div>
                </div>
            </div>
    </div>
  )
}
