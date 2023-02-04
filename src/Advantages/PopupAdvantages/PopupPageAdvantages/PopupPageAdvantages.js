import React from 'react'
import './PopupPageAdvantages.css'




const PopupPageAdvantages = ({ title, description, image: Image }) => {
  return (
    <div className='wrapper-page__advantages'>

      <div className='block-page__advantages'>

        <Image className="img-collection" />
        <div className='container-page__advantages'>
          <h1 className='title-page__advantages'  > {title}   </h1>
          <p className='subtitle-page__advantages' > {description}  </p>

        </div>

      </div>


    </div>
  )
}

export default PopupPageAdvantages;
