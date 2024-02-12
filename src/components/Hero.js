import React from "react"

function Hero() {
    return (
      <div className="Hero">
        <img src= {require('../images/img.png')} alt='gird-img' className='grid-img'/>
        <div className="hero-class">
            <h1>Online Experiences</h1>
            <p>Join Unique Interactive activities lead by 
              one-of-kind hosts-all without leaving 
              home.
            </p>
        </div>
      </div>
     
    );
  }
  
  export default Hero;


  