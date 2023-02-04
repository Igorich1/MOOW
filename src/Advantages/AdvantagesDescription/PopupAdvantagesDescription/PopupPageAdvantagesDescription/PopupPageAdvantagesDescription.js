import React from 'react'
import './PopupPageAdvantagesDescription.css'
import Star from '../img/Star.svg'
// import { motion } from 'framer-motion'
const PopupPageAdvantagesDescription = ({ title, }) => {
  return (
    <div className='container-description '>


      <img
        className='img-star'
        alt='Star'
        src={Star}
        // animate={{ rotate: 360 }}
        // transition={{
        //   duration: 3,
        //   repeat: Infinity,
        // }}
      
      ></img>

      <li className='text-page__advantages' >{title}</li>

    </div>
  )
}

export default PopupPageAdvantagesDescription;
