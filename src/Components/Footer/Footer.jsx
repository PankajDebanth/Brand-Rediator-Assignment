import "./Footer.css";
import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* Left side */}
            <div className=" flexColStart f-left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"0.0rem"}}/>
                    <div>
                        <p>Tripura ( North-East Side)</p>
                        <p>Agartala</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"0.6rem"}}/>6009263309</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"0.6rem"}}/>pnkzdn580@gmail.com</h4>
                </div>
            </div>

            {/* Right Side */}
            <div className="f-right">
                <span className="primaryText">About the site</span> <br />
                <span className="secondaryText">Welcome to this web app! This project was assigned to me by Brand Radiator as a way to showcase my skills and abilities. If you encounter any issues while using this web app, please let me know and I'll do my best to fix them. Your feedback is important to me, and I appreciate your understanding as I work to ensure that everything is functioning properly. Thank you.</span>
                <div className="f-social">
                    <a href="https://github.com/PankajDebanth" target="_blank"><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    <a href="https://www.linkedin.com/in/pankaj-debnath-b580541ba/"  target="_blank"><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    <a href="https://scapbook65.netlify.app/" target="_blank" ><FaGlobe size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                    
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Footer