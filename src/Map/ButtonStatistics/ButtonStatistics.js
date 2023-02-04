import React, { useState } from "react";
import "./ButtonStatistics.css";



export default function ButtonStatistics() {
  const [ButtonStatistics, setButtonStatistics] = useState(false);

  const toggleButtonStatistics = () => {
    setButtonStatistics(!ButtonStatistics);
  };

  if(ButtonStatistics) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
      <button onClick={toggleButtonStatistics} className="btn-button__statistics">
      Більше статистики від MOOW      </button>

      {ButtonStatistics && (
        <div className="modal">
          <div onClick={toggleButtonStatistics} className="overlay"></div>
          <div className="modal-content">
            <h2 className="title-modal">Незабаром</h2>
            <p>
              
            </p>
            <button className="close-modal" onClick={toggleButtonStatistics}>
              
            </button>
          </div>
        </div>
      )}
    </>
  );
}

