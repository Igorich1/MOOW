import React from 'react'
import './Driver.css'
import LogoMoow from './img/LogoMoow.svg'
import Phone from './img/Phone.svg'
import PopapDriver from './PopapDriver/PopapDriver'
const Driver = () => {
    return (
        <div className='wrapper-driver' >

            <div className='container-drive' >

                <div className='container-logo__moow'>
                    <img className='img-logo__moow' alt='LogoMoow' src={LogoMoow} ></img>
                </div>

                <div className='wraper-drive__midle' >
                    <div className='box-title__driver' >
                        <div className='wraper-description__title' >
                        <h1 className='title-driver'>Організація, контроль та безпека</h1>
                        <p className='description-driver' >Додаток для водіїв транспортних засобів</p>

                        </div>
                      

                        <div className='container-subtitle__driver'>
                            <div className='box-subtitle__left' >
                                <h1 className='subtitle-driver' >Для юридичних/фізичних осіб</h1>
                                <PopapDriver title='Додавання водія до виставленого транпсорту' />
                                <PopapDriver title='Відстеження водії на карті під час виконання замовлення та у вільний час' />
                                <PopapDriver title='Контроль переписки та ходу виконання замовлення' />
                                <PopapDriver title='Довіра від користувачів та захист транспротну' />

                            </div>

                            <div className='box-subtitle__right' >
                                <h1 className='subtitle-driver' >Для водіїв</h1>
                                <PopapDriver title='Корисні оповіщення про заявки на водійство, нове замовлення' />
                                <PopapDriver title='Карта навігатор з прокладанням найзручніших маршрутів' />
                                <PopapDriver title='Організація замовлень та чат із замовником для обговорення деталей' />
                                <PopapDriver title='Додавання проміжних точок між головними точками загрузки та вигрузки' />

                            </div>
                        </div>

                    </div>
                    <div className=''>
                        <img className='img-phone' alt='Phone' src={Phone} ></img>
                    </div>
                </div>
                <h1 className='bottom-title__driver' >Скоро</h1>
            </div>



        </div>
    )
}

export default Driver
