import React from 'react'
import ListPopupStatistic from './components/ListPopupStatistic'
import './PopupStatistics.css'
const PopupStatistics = ({title, description, text}) => {
    return (
        <div className='wrappe-popup-statistics'>

            <h1 className='title-popup-statistics'>{ title}</h1>


            <ListPopupStatistic counter="1" text="Дніпропетровська область - 599,7 "/>
            <ListPopupStatistic counter="2" text="Кіровоградська область - 594,6"/>
            <ListPopupStatistic counter="3" text="Харківська область - 573,3 "/>
            <ListPopupStatistic counter="4" text="Запорізька область - 532,5 "/>
            <ListPopupStatistic counter="5" text="Миколаївська область - 495,1 "/>

          

            <h1 className='title-popup-statistics title-popup-statistics__bottom '>{description}<span className='title-popup-statistics title-statistics__color' >{text}</span></h1>

        </div>
    )
}

export default PopupStatistics
