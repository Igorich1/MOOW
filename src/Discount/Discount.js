import React from 'react'
import DiscountPopap from './DiscountPopap/DiscountPopap';
import './Discount.css'
import { ReactComponent as Angar } from './img/Angar.svg'
import { ReactComponent as Tractor } from './img/Tractor.svg'
import { ReactComponent as Truck } from './img/Truck.svg'
import { ReactComponent as Wheat } from './img/Wheat.svg'
const Discount = () => {
  return (
    <div className='wrapper-discount' >
      <h1 className='title-discount'>Знижка на послуги MOOW до 12.12</h1>

      <div className='box-popa-discount' >
        <DiscountPopap image={Angar} />
        <DiscountPopap image={Truck} />
        <DiscountPopap image={Tractor} />
        <DiscountPopap image={Wheat} />


      </div >


    </div>
  )
}

export default Discount
