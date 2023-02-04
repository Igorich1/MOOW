import React from 'react'
import './PopapTypesRegistration.css'
import Moow from './img/Moow.svg'
const PopapTypesRegistration = ({ title, description }) => {
    return (
        <div className='wrapper-popap__registration' >

            <div className='box-popap__registration' >
                <img className='img-moow' alt='Moow' src={Moow} ></img>
                <div className='container-title__registration'>
                    <h1 className='title-popap__registration' >{title}</h1>
                    <p className='description-popap__registration'>{description}</p>

                </div>
            </div>

        </div>
    )
}

export default PopapTypesRegistration
