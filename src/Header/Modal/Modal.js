import React, { useState } from "react";
import "./Modal.css";
import AppStore from './img/AppStore.png'
import PlayMarket from './img/PlayMarket.png'
import QrCode from './img/QrCode.png'


export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
      Завантажити додаток на смартфон
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="title-modal">Завантажити додаток на смартфон</h2>
            <p>
              
              <div className="container-img__modal">
                
              <img className="" alt="" src={PlayMarket}></img>
              <img className="img-qrcode" alt="" src={QrCode}></img>

              <img className="" alt="" src={AppStore}></img>
              </div>
       


    

            
            </p>
            <button className="close-modal" onClick={toggleModal}>
              
            </button>
          </div>
        </div>
      )}
    </>
  );
}