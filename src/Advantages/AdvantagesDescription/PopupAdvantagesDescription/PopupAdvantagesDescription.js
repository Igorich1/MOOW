import React from 'react'
import PopupPageAdvantagesDescription from './PopupPageAdvantagesDescription/PopupPageAdvantagesDescription';
import './PopupAdvantagesDescription.css'
// import {motion} from 'framer-motion'
const PopupAdvantagesDescription = () => {
  return (
    <div>
      <h1
       initial={{
        x: -1000,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,

      }}
      transition={{
        duration: 1.2,
        delay: 0.7,
      }}
      
      className='title-popup__advantages' >Для кого ми існуємо</h1>
<PopupPageAdvantagesDescription title='Для користувачів із різних сфер бізнесу.' />
<PopupPageAdvantagesDescription title='Для оптових та роздрібних покупців та продавців.' />
<PopupPageAdvantagesDescription title='Для дрібного та середнього бізнесу.' />
<PopupPageAdvantagesDescription title='Для фермера, водія трактора та великих виробників.' />
<PopupPageAdvantagesDescription title='Для тих, хто цінує час та прибуток.' />

    </div>
  )
}

export default PopupAdvantagesDescription;
