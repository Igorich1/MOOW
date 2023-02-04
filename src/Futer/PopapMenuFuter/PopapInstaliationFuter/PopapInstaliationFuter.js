import React from 'react'
import './PopapInstaliationFuter.css'
import AppStore from './img/AppStore.svg'
import GooglePlay from './img/GooglePlay.svg'
const PopapInstaliationFuter = () => {
  return (
    <div className='wrapper-popup_instaliation' >


    <div className='description-popup__instaliation' >
        <h1 className='text-popup__instaliation'>Встанови безкоштовний додаток на смартфон</h1>

        <div className='wrapper-img__instaliation'>
            <img className='img-instaliation' alt='GooglePlay' src={GooglePlay} ></img>

            <img className='img-instaliation' alt='AppStore' src={AppStore} ></img>

        </div>



        <h1 className='text-popup__instaliation' >Або завантажуй та спробуй з смартфону</h1>

        <a href='https://moow.pro/'  className='button-link__instaliation' >До веб-версії </a>
     

    </div>

</div>
  )
}

export default PopapInstaliationFuter
