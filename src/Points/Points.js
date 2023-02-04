import React from 'react'
import './Points.css'
import PopapPoints from './PopapPoints/PopapPoints';
import { ReactComponent as ImgM} from './img/ImgM.svg'
import { ReactComponent as ImgW } from './img/ImgW.svg'
import {ReactComponent as ImgCirkle} from './img/ImgCirkle.svg'
import {ReactComponent as ImgCirkleStar} from './img/ImgCirkleStar.svg'





const Points = ({}) => {
    return (
        <div className='wrapper-points' >
            <h1 className='title-points' >Все просто!</h1>
            <div className='container-points' >
                
                <PopapPoints  title='Крок 1' description='Встановити додаток або зайти на сайт сервісу' image={ImgM} />
                <PopapPoints title='Крок 2' description='Завантажуйте документи та підтверджуйте особистість чи компанію' image={ImgW} />
                <PopapPoints title='Крок 3' description='Постінг / пошук товарів та послуг Здійснюйте угоди та укладайте договори' image={ImgCirkle} />
                <PopapPoints title='Крок 4' description='Додаткові функції “Підключайте спеціалізовані додаткові функції”' image={ImgCirkleStar} />

            </div>



        </div>
    )
}

export default Points
