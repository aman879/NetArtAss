import React from 'react'
import "./Home.css"
import logoImage from "../../assets/asserts/logo.png"
import image1 from "../../assets/asserts/1.png"
import image2 from "../../assets/asserts/2.png"
import image3 from "../../assets/asserts/3.png"

const Home = () => {
    return(
        <div className="flex-container">
            <div className="logo">
                <img src={logoImage} alt="Logo" height="140px"/>
            </div>
            <div className="flex-item">
                <div className="image-wrapper" style={{ flex: '35%' }}>
                    <img className="image1" src={image1} alt="Award" width="70%" height="100%"/>
                </div>
                <div className="image-wrapper" style={{ flex: '75%' }}>
                    <div><strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong></div>
                    <ul>
                        <li className='point'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                    <div className="image-wrapper">
                        <img src={image2} alt="person" width="90%" />
                        <div className="image-description">Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</div>
                    </div>
                </div>
            </div>
            <div className="text">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </div>
            <div className="image-wrapper image3">
                <img src={image3} alt="tools" width="70%"/>
                <div className='image-description'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</div>
            </div>
            <div className="red-line"></div>
        </div>
    )
}

export default Home