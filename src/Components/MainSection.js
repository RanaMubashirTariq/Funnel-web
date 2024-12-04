import React from 'react'
import './MainSection.css';
import videofile from '../Videos/animals.mp4'

export default function MainSection() {
  return (
    <div className='main-container'>
        <div className="main-container-part-1">
              <div className='right-part-main-container'>
                       <div className='first-part'>
                          <div className='part1'>
                             <p>👋  Hello! We are experts!</p>
                          </div>


                          <div className='part2' >

                          <div className='part2-top-side'><h2>Global <span>Forex Trading</span> at a Glance</h2></div>
                            <div className='part2-bottom-side'><p>Torem ipsum dolor sit amet, consectetur elit adipiscing. Nunc vulputate libero interdum.</p></div>
                          </div>
                       </div>

                       <div className='second-part'>
                        <div className='right-btn'><button>Book a Call</button></div>
                        <div className='left-btn'><button>Learn More</button></div>
                       </div>
              </div>

              {/* left-part */}

              <div className='left-part-main-container'><video src={videofile} type='video/mp4' controls ></video></div>
    </div>
            
        
        <div className='main-container-part-2'><p>100% Trained Virtual Assistanst</p></div>
          <div className='main-container-part-3'>
            <div className='main-container-pic'><img src="/Images/logosium.svg"/></div>
            <div className='main-container-pic'><img src="/Images/logosium2.svg"/></div>
            <div className='main-container-pic'><img src="/Images/logosium3.svg"/></div>
            <div className='main-container-pic'><img src="/Images/logosium.svg"/></div>
            <div className='main-container-pic'><img src="/Images/logosium2.svg"/></div>
            <div className='main-container-pic'><img src="/Images/logosium3.svg"/></div>
          </div>
   </div>
  )
}
