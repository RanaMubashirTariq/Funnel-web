import React from 'react'
import './ThirdComponent.css'
import ThirdComponentPart2 from './ThirdComponentPart2'

export default function ThirdComponent() {
  return (
    <div className='third-container'>
           <div className='third-container-part-1'>
              <div className='part1-third-d'>
                <div className='part1-third-heading-d'><h2>WHY HIRE <span>FULL-TIME EMPLOYEES</span> WHEN YOU CAN GET YOUR OWN <span>DEDICATED MARKETING TEAM?</span></h2></div>
                <div className='part1-third-paragraph-d'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniam, quis.</p></div>
              </div>

              <div className='small-three-d'>
                  <div className='small-d'>
                    <div  className='small-d-heading'><h2>50+</h2></div>
                    <div  className='small-d-paragraph'><p>Project Completed</p></div>
                  </div>

                  <div className='small-d'>
                    <div  className='small-d-heading'><h2>100%</h2></div>
                    <div  className='small-d-paragraph'><p>Client satisfaction </p></div>
                  </div>

                  <div className='small-d'>
                    <div  className='small-d-heading'><h2>10+</h2></div>
                    <div  className='small-d-paragraph'><p>Years experience</p></div>
                  </div>
              </div>
                
              <div className='right-btn'><button>Book a Call</button></div>
           </div>
           <ThirdComponentPart2/>
    </div>
  )
}
