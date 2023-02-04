import React from 'react'
import './PopapDriver.css'
import ColorCircle from './img/ColorCircle.svg'
const PopapDriver = ({ title }) => {
    return (
        <div className='container-popap__description '>

            <img
                className='img-color__circle'
                src={ColorCircle}


            ></img>

            <li className='text-popap__description ' >{title}</li>

        </div>
    )
}

export default PopapDriver
