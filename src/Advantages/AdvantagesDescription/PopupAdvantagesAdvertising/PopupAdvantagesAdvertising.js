import React from 'react'
import './PopupAdvantagesAdvertising.css'
import Mow from './img/Mow.svg'
import AppStore from './img/AppStore.svg'
import GooglePlay from './img/GooglePlay.svg'

const PopupAdvantagesAdvertising = () => {
    return (
        <div className='wrapper-popup_advantages' >
            <img 
            className='img-mow'
             alt='Mow'   src={Mow}  ></img>

            <div className='description-popup__advantages' >
                <h1 className='text-popup__advantages'>Спробуй прямо зараз через браузер!</h1>

                <button className='button-link__advantages' >Перейти до веб-версії </button>


                <h1 className='text-popup__advantages' >Або завантажуй та спробуй з смартфону</h1>

                <div className='wrapper-img-link'>
                    <img className='img-google-play' alt='' src={GooglePlay} ></img>

                    <img className='img-app__store' alt='' src={AppStore} ></img>

                </div>

            </div>
            <img className='img-mow  img-mow__bottom' alt='Mow' src={Mow}  ></img>

        </div>
    )
}

export default PopupAdvantagesAdvertising;
