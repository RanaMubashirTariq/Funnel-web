import React from 'react'
import './PricingPlan.css';
import PricingPlanSection2 from './PricingPlanSection2';

export default function PricingPlan() {
  return (
    <div className='pricing-plan-container'>
          <div className='content-cards'>
              <div className='card-1-d'>
                 <div className='card-1-pic'><img src="/Images/star-icon.svg" alt="" /></div>
                 <div className='card-1-content-d'>
                    <h2>Lorem ispum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet.</p>
                 </div>
                 
              </div>

              {/* part-2 */}
              <div className='card-1-d'>
                 <div className='card-1-pic'><img src="/Images/star-icon.svg" alt="" /></div>
                 <div className='card-1-content-d'>
                    <h2>Lorem ispum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet.</p>
                 </div>
                 
              </div>
              {/* part-3 */}
              <div className='card-1-d'>
                 <div className='card-1-pic'><img src="/Images/star-icon.svg" alt="" /></div>
                 <div className='card-1-content-d'>
                    <h2>Lorem ispum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet.</p>
                 </div>
                 
              </div>
          </div>

              <PricingPlanSection2/>
    </div>
  )
}
