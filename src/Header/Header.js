import React from 'react'
import './Header.css';
import PopapMenuHeader from './PopapMenuHeader/PopapMenuHeader';
import Modal from './Modal/Modal';



const Header = () => {

  return (
    <div className='wrapper-header' >
      <PopapMenuHeader />
      <div className='header-img'>

        <div className='container-header'>
          <div className='box-title__header' >
            <h1
            className='title-header'>Весь агро-транспортний ринокв одному сервісі
          </h1>
          <h2
            className='text-header' >Платформа для фермерів, перевізників, промислових та торгових компаній.</h2>
        </div>
        <div className='container-button__header' >
          <button className='header-button__web' >Перейти до веб-версії</button>

          <Modal />
        </div>
      </div>
    </div>
    </div >
  )
}

export default Header;
