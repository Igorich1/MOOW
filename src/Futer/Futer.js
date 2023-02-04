import React from 'react'
import './Futer.css'

// import FacebukImg  from './img/FacebukImg.svg'
// import InstagramImg  from './img/InstagramImg.svg'
// import LetterImg  from './img/LetterImg.svg'
// import LocationImg  from './img/LocationImg.svg'
import MoowFuter  from './PopapMenuFuter/img/MoowFuter.svg'
// import StarBelow  from './img/StarBelow.svg'
// import TelegraImg  from './img/TelegraImg.svg'
// import  YoutubeImg from './img/YoutubeImg.svg'
import PopapMenuFuter from './PopapMenuFuter/PopapMenuFuter';

const Futer = () => {
  return (
    <div className='wraper-futer' >
<img className='img-moow__futer' alt='MoowFuter' src={MoowFuter} ></img>
      <div className='' >

        <div className='container-pages' >
       <PopapMenuFuter/>

       

        </div>

       


      </div>
<h1  className='futer-date'>©ТОВ «Діджітал інвест адвайзор», 2021-2023</h1>
    </div>
  )
}

export default Futer
