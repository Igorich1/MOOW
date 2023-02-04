import React from 'react'
import './PopapMenuFuter.css'
import StarBelow from './img/StarBelow.svg'
import FacebukImg from './img/FacebukImg.svg'
import InstagramImg from './img/InstagramImg.svg'
import LetterImg from './img/LetterImg.svg'
import LocationImg from './img/LocationImg.svg'
import StarBelowImg from './img/StarBelow.svg'
import TelegraImg from './img/TelegraImg.svg'
import YoutubeImg from './img/YoutubeImg.svg'
import ViberImg from './img/ViberImg.svg'
import PopapDocuments from './PopapDocuments/PopapDocuments'
import Modal from '../../Header/Modal/Modal'
import PopapInstaliationFuter from './PopapInstaliationFuter/PopapInstaliationFuter'
const PopapMenuFuter = ({ toggleDocuments }) => {
    return (
        <div className='wrapper-menu__futer' >

            <div className='wraper-pages' >
                <div className='wraper-text__img' >
                    <img className='img-star__below' alt='StarBelow' src={StarBelow} ></img>
                    <h1 className='title-pages' >Сторінки</h1>
                </div>

                <div className='wrapper-pages__left' >
                    <li className='subtitle-pages' >Головна</li>
                    <li className='subtitle-pages' >Про сервіс</li>
                    <li className='subtitle-pages' >FAQ</li>
                    <li className='subtitle-pages' >Команда</li>
                </div>

            </div>







            <div className='wrapper-contacts'>
                <div className='wraper-text__img' >
                    <img className='img-star__below' alt='StarBelow' src={StarBelow} ></img>
                    <h1 className='title-pages' >Сторінки</h1>
                </div>


                <div className='wrapper-contacts' >
                    <div className='box-contacts' >
                        <img className='location-img' alt='LocationImg' src={LocationImg} ></img>
                        <li className='subtitle-pages' >Київ-03188</li>
                    </div>
                    <div className='box-contacts'>
                        <img className='letter-img' alt='LetterImg' src={LetterImg} ></img>
                        <li className='subtitle-pages' > moow.ltd@gmail.com</li>
                    </div>
                    <div className='box-contacts'>
                        <a href='#' >
                            <img className='telegra-img' alt='TelegraImg' src={TelegraImg} ></img>

                        </a>
                    </div>
                    <div className='box-contacts'>
                        <a href='#' >
                            <img className='Viber-img' alt='ViberImg' src={ViberImg} ></img>

                        </a>

                    </div>



                </div>

            </div>

            <div className='wrapper-networks' >
                <div className='container-networks'>
                    <div className='wraper-text__img' >
                        <img className='img-star__below' alt='StarBelow' src={StarBelow} ></img>
                        <h1 className='title-pages' >Соціальні мережі</h1>


                    </div>
                </div>
                <div className='box-contacts'>
                    <a href='#' >
                        <img className='letter-img' alt='LetterImg' src={FacebukImg} ></img>
                    </a>
                    <a href='#' >
                        <img className='letter-img' alt='LetterImg' src={InstagramImg} ></img>
                    </a>
                    <a href='#' >
                        <img className='letter-img' alt='LetterImg' src={YoutubeImg} ></img>
                    </a>




                </div>
            </div>


            <div className='wrapper-documents'>
                <div className='box-line__documents'>
                    <PopapDocuments />

                </div>
            </div>

            <div>

                <PopapInstaliationFuter />
            </div>

        </div>
    )
}

export default PopapMenuFuter;
