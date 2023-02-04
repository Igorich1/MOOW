import React from 'react'
import '../Advantages/Advantages.css'
import PopupAdvantages from './PopupAdvantages/PopupAdvantages';
import AdvantagesDescription from './AdvantagesDescription/AdvantagesDescription';

const Advantages = () => {
  return (
    <div className='wrappe-advantages'>
<PopupAdvantages/>
<AdvantagesDescription/>

    </div>
  )
}

export default Advantages;
