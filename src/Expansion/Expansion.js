import React from 'react'
import './Expansion.css'
const Expansion = () => {
    return (
        <div className='wrapper-expansion' >

            <div className='container-title__expansion' >
                <h1 className='title-expansion' >Завантажуйте додаток або працюйте через браузер</h1>
                <p className='subtitle-expansion' >Весь функціонал доступний у двох форматах. Працюйте через телефон або на комп’ютері.</p>
            </div>

            <div className='container-link__expansion' >
                <div className='link-browser' >
                    <a className='title-link__browser ' href='https://moow.pro/' target='_blank' >Почати працювати через браузер </a>

                </div>

                <div className='container-link__download' >

                    <div className='link-download'>
                        <a className='title-link__download' href='https://play.google.com/store/apps/details?id=com.danmrok.MoowApplicationAndroid' target='_blank' >Завантажити додаток з Google Play </a>

                    </div>
                    <div className='link-download'>
                        <a className='title-link__download' href='https://moow.pro/' target='_blank' >Завантажити додаток з App Store</a>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Expansion
