import React from 'react'
import './MapPopap.css'
import MapImg from './img/MapImg.svg'
import ButtonStatistics from './ButtonStatistics/ButtonStatistics';
const MapPopap = () => {
  return (
    <div className='wrapper-map'>
      <li className='title-map'>Наведіть на потрібну область, щоб побачити дані</li>
      <img className='img-map' alt='MapImg' src={MapImg} ></img>
<ButtonStatistics/>
    </div>
  )
}

export default MapPopap

