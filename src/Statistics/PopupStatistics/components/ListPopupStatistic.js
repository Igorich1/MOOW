import React from "react"
const ListPopupStatistic = ({counter, text}) => {
  return (
        <div className='list-popup-statistics' >
                <div className='circle-popup-statistics' >{counter}</div>
                <li className='text-popup-statistics' >{text}</li>
            </div>
  )
}

export default ListPopupStatistic
