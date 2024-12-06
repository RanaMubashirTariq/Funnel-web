import React from 'react'
import './PricingPlanSection2.css';

export default function PricingPlanSection2() {
  return (
    <div className='pricing-section-2-container'>
                <div className='pricing-section-2-content'>
                    <h2>skainet <span>pricing</span> plan </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim.</p>
                </div>

                {/* part-2 for cards */}

                <div className='pricing-section-2-cards'>
                        <div className='pricing-card-d'>
                              <button className='betch-btn'>BASIC</button>
                              <div className='pricing-card-paragraph'><p>For all individuals and starters who want to start with domaining.</p></div>
                                 <hr/>
                                 <div className='permium-d'>
                                     <h2>$19</h2>
                                     <p>Per member, per Month</p>
                                 </div>
                                 <hr/>
                                 <div className='features-list-d'>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Corem ipsum dolor</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Sit amet, consectetur adipiscing</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Nunc vulputate libero</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-cross.svg"/><p>et velit interdum</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-cross.svg"/><p>Aliquet odio mattis. </p></div>
                                    <div className='list-row-d'><img src="/Images/circle-cross.svg"/><p>Sit amet, consectetur</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>adipiscing elit nunc vu</p> <div className='list-row-inner-d'><h5>Coming Soon</h5></div></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Lputate liber</p>  <div className='list-row-inner-d'><h5>Coming Soon</h5></div></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Velit interdum, acdh</p>  <div className='list-row-inner-d'><h5>Coming Soon</h5></div></div>
                                 </div>
                                 <button className='payment-btn'>Start 14 days free trials</button>
                        </div>

                        {/* card-2 */}
                        <div className='pricing-card-d'>
                              <button className='betch-btn'>PROFESSIONAL</button>
                              <div className='pricing-card-paragraph'><p>For all individuals and starters who want to start with domaining.</p></div>
                                 <hr/>
                                 <div className='permium-d card-2-permium-d'>
                                     <h2>$49</h2>
                                     <p>Per member, per Month</p>
                                 </div>
                                 <hr/>
                                 <div className='features-list-d'>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Corem ipsum dolor</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Sit amet, consectetur adipiscing</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Nunc vulputate libero</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>et velit interdum</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Aliquet odio mattis. </p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Sit amet, consectetur</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>adipiscing elit nunc vu</p> <div className='list-row-inner-d'><h5>Coming Soon</h5></div></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Lputate liber</p> <div className='list-row-inner-d'><h5>Coming Soon</h5></div></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Velit interdum, acdh</p> <div className='list-row-inner-d'><h5>Coming Soon</h5></div></div>
                                 </div>
                                 <button className='payment-btn card-2-payment-btn'>Start 14 days free trials</button>
                        </div>

                        {/* card-3 */}
                        <div className='pricing-card-d'>
                              <button className='betch-btn'>ADVANCED</button>
                              <div className='pricing-card-paragraph'><p>For all individuals and starters who want to start with domaining.</p></div>
                                 <hr/>
                                 <div className='permium-d'>
                                     <h2>$99</h2>
                                     <p>Per member, per Month</p>
                                 </div>
                                 <hr/>
                                 <div className='features-list-d'>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Corem ipsum dolor</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Sit amet, consectetur adipiscing</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Nunc vulputate libero</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>et velit interdum</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Aliquet odio mattis. </p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Sit amet, consectetur</p></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>adipiscing elit nunc vu</p> <div className='list-row-inner-d'><h5>Coming Soon</h5></div></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Lputate liber</p> <div className='list-row-inner-d'><h5>Coming Soon</h5></div></div>
                                    <div className='list-row-d'><img src="/Images/circle-tick.svg"/><p>Velit interdum, acdh</p> <div className='list-row-inner-d'><h5>Coming Soon</h5></div></div>
                                 </div>
                                 <button className='payment-btn'>Start 14 days free trials</button>
                        </div>
                </div>

                {/* part-3 */}
                <div className='pricing-payment-trick-d'>
                        <h2>Payment Methods</h2>
                        <div className='payment-card'>
                            <img src="/Images/payment-cards.svg" alt="" />
                            <img src="/Images/coin-icon.svg" alt="" className='pic-2'/>
                        </div>
                        <p>We accept Visa, American Express, Mastercard, Paypal and Crypto</p>
                </div>
    </div>
  )
}
