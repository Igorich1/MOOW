import React from 'react'
import './PopapPoints.css'
const PopapPoints = ({ title, description, image: Image }) => {
    return (
        <div  className='wrapper-popap__points' >

            <div className='container-popap__points  ' >

                <div className='box-popap__points box-popap__pointscolor' >
                    <Image className="img-popap__points" />

                    <div className='wrapper-text__popap__points' >
                        <h1 className='title-popap__points' >{title}</h1>
                        <p className='subtitle-popap-points' >{description}</p>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default PopapPoints
