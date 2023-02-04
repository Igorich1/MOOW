import React from 'react'
import './DiscountPopap.css'

import CheckMark from './img/CheckMark.svg'
import EyeImg from './img/EyeImg.svg'
import StarPurpal from './img/StarPurpal.svg'


const DiscountPopap = ({ image: Image }) => {
  return (
    <div className='wrapper-discount__popap'>



      <div className='container-top__filler' >
        <div class="container">
          <Image className='img-discount' />
          <div className='title-discount__left' >Рекламовано</div>
          <img className='centered-right' alt='CheckMark' src={CheckMark} ></img>
        </div>






      </div>




<div className='container-wrapper__discount' >

<div className='container-bottom__filler'>


<div className='box-bottom__filler' >
  <h1 className='composition-title' >Склад 1</h1>
  <div className='box-price'>
    <p className='price-title'>300 грн/кв.м.</p>
    <p className='price-subtitle' >Мін.ціна</p>

  </div>

</div>


</div>

<div className='wrpper-subtitle'>
<div className='box-subtitle'>
  <img className='img-star__purpal' alt='StarPurpal' src={StarPurpal}></img>
  <p className='title-subtitle' >4.8</p>
</div>


{/* <div className='box-subtitle1'>
  <img className='Eye-Img1' alt='EyeImg' src={EyeImg}></img>
  <p className='title-subtitle' >12 тис.</p>
</div> */}
</div>


</div>

 

    </div>

  )
}

export default DiscountPopap
