import React from 'react'
import PopupAdvantagesDescription from './PopupAdvantagesDescription/PopupAdvantagesDescription';
import PopupAdvantagesAdvertising from './PopupAdvantagesAdvertising/PopupAdvantagesAdvertising';
import  "./AdvantagesDescription.css";

const AdvantagesDescription = () => {
  return (
    <div className="wrapper-advantages__aescription">
      <PopupAdvantagesDescription/>
      <PopupAdvantagesAdvertising/>
    </div>
  )
}

export default AdvantagesDescription;
