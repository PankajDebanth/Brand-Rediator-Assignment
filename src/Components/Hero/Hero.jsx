import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="square"/>
                    <motion.h1
                    initial={{y:'2rem', opacity:'0'}}
                    animate={{y:0, opacity:1}}
                    transition={{
                        duration: 2,
                        type:'spring'
                    }}
                    >
                        Welcome To my <br/>Assignment <br/>given by <b style={{fontFamily:'monospace'}}>Brand Radiator.</b>
                    </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span>This web app is the result of my hard work and dedication. It's designed to provide you with quick and reliable information on a wide range of topics. From your requirement, I've got you covered. My goal is to ensure that you receive the most accurate and helpful responses to your queries.  </span>
                    <span>So whether you're looking for assistance or just want to have a friendly conversation, I'm here for you. Browse the site to explore the various topics I cover, . Thank you for choosing my Assignment.</span>
                </div>
            </div>

            <div className="hero-right">
                <motion.div
                initial={{x:'7rem', opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{
                    duration: 2,
                    type:'spring'
                }}

                className="image-container">
                    <img src='./pexels-kris-lucas-3385662.jpg' alt='no image'/>
                </motion.div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero