import React from 'react'
import BabyImg from '../assets/Images/Baby_Img.png'

const Intro = () => {
  return (
    <div className="Intro_Container">
        <div className="Intro_Details">
            <p>Join us to celebrate</p> <br />
            <div className="text">
                <h1>Emma's</h1>
                <h3>1st Birthday Party !</h3>
            </div>

            <br />
            
            <p>Sunday Aug 10th <br /> 
            from 2:00PM
            </p>

            <br />

            <p>456,Colony Near Hightech City <br />
            Hyderbad,522004.
            </p>
            <img src={BabyImg} alt="" />
        </div>
    </div>
  )
}

export default Intro