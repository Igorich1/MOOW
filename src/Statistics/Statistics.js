import React from 'react'
import PopupStatistics from './PopupStatistics/PopupStatistics'
import './Statistics.css'
const Statistics = () => {
    return (
        <div className='wrapper-statistics' >

            <div className='wrapper-statistics__text' >

                <h1 className='title-statistics__text' >Наша статистика показує</h1>
                <h2 className='subtitle-statistics__text' >Збір урожаю соняшнику на 01 грудня 2021р.
                    Топ-5 областей</h2>
                <p className='description-statistics__text' >Дані наведено без урахування тимчасово окупованої території Автономної Республіки Крим, м. Севастополя та частини тимчасово окупованих територій у Донецькій та Луганській областях</p>


            </div>

            <div className='container-statistics' >
                <PopupStatistics title='Зібрана площа (тис. га.)' description='По Україні - ' text='6 523,9 тис. га.' />


                <PopupStatistics title='Обсяги виробництва (тис.ц.)' description='По Україні -' text='164 398,4 тис. ц.' />


                <PopupStatistics title='Зібрана площа (тис. га.)' description='По Україні - ' text='25,2 ц. за 1 га. зібраної площі' />

            </div>

        </div>
    )
}

export default Statistics
