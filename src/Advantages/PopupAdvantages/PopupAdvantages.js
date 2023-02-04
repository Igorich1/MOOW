import React from 'react'
import './PopupAdvantages.css'
import PopupPageAdvantages from './PopupPageAdvantages/PopupPageAdvantages';
import { ReactComponent as AllOne } from './img/AllOne.svg'
import { ReactComponent as Business } from './img/Business.svg'
import { ReactComponent as Finger } from './img/Finger.svg'
import { ReactComponent as Verified } from './img/Verified.svg'
const PopupAdvantages = () => {
  return (
    <div>
      <h1 className='title-popup_advantages' >Наші переваги</h1>


      <div className='container-popup__advantages'>
        <div className='popup-advantages__top' >
          <PopupPageAdvantages title="Все в одному сервісі" description="Вам більше не доведеться працювати у 3-4 сервісах одночасно, щоб закрити свої потреби. Moow - це вся товарно-транспортна діяльність у три кліка."
          
          
          image={AllOne}
          
          />
          <PopupPageAdvantages title="Повний контроль бізнес процесів" description="Вся аналітика та документація в одному сервісі. Платформа надає повноту даних, починаючи від документації, аналітики продажів, закінчуючи відстеженням вантажу по GPS прямо на мапі." image={Business} />

        </div >
        <div className='popup-advantages__bottom' >
          <PopupPageAdvantages title="Верифіковані учасники" description="Ви можете бути впевненими у надійності учасників платформи. Будь-яка людина, яка надає послуги, проходить декілька видів верифікації. Також платформа веде публічну історію діяльності та надає рейтингову систему." image={Verified} />
          <PopupPageAdvantages title="Простота" description="Не дивлячись на різноманітність функціоналу, користуватися сервісом дуже просто. Ви можете замовити товар чи послугу напряму, або через чат з продавцем." image={Finger} />

        </div>

      </div>
    </div>

  )
}

export default PopupAdvantages;
