import React from 'react';
import "./Footer.css";
import phone from "../../assets/asserts/phone.png";
import weblogo from "../../assets/asserts/website.png"
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex1">
        <p><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>
        <p className='text'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
      </div>
      <div className="flex2">
        <div className="contact-info">
            <img src={phone} alt="phone icon" width= "20px"/>
            <p>Toll free: 1800 200 1234</p>
        </div>
        <div>
            <FaFacebook />
            <a href="https://www.facebook.com">www.facebook.com/cripumps</a>
        </div>
        <div>
            <img src={weblogo} alt="Website Logo" width="20px" />
            <a href="https://www.website.com">www.crigroups.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
