import React from 'react'
import '../PopapMenuHeader/PopapMenuHeader.css'
import '../PopapMenuHeader/AnimationLogo.css'
import Logo from './img/Logo.svg'
const PopapMenuHeader = () => {
  return (
    <div className='container-menu' >
      <div class="logo-container">
        <img className='img-logo' id="page-logo" src={Logo} ></img>
      </div>

      <div className='box-menu__title'>

        <a className='title-menu' href='#' >Про сервіс</a>
        <a className='title-menu' href='#'>Команда</a>
        <a className='title-menu' href='#' >FAQ</a>

      </div>

      <button className='button-header' >До веб-версії MOOW</button>



    </div>
  )
}

export default PopapMenuHeader
