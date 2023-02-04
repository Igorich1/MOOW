import React, { useState } from "react";
import "./PopapDocuments.css";

import DocumentsImg from './img/DocumentsImg.svg'
import StarDocument from './img/StarDocument.svg'
import StarBelow from '../img/StarBelow.svg'



export default function PopapDocuments() {
    const [documents, setDocuments] = useState(false);

    const toggleDocuments = () => {
        setDocuments(!documents);
    };

    if (documents) {
        document.body.classList.add('active-documents')
    } else {
        document.body.classList.remove('active-documents')
    }

    return (
        <>


            <div className="wraper-documents" >
            <img className='img-star__below' alt='StarBelow' src={StarBelow} ></img>
                <h1 onClick={toggleDocuments} className="title-documents">Документи</h1>

            </div>

            {documents && (
                <div className="documents">
                    <div onClick={toggleDocuments} className="overlay"></div>
                    <div className="documents-content">


                        <div className="wrapper-title__documents" >
                            <img className="img-star__document" alt="StarDocument" src={StarDocument} ></img>
                            <h1 className="title-popap__documents" >Документи</h1>
                        </div>

                        <div className="container-documents">
                            <div className="wrapper-subtitle__documents" >
                                <img className="documents-img" alt="DocumentsImg" src={DocumentsImg} ></img>
                                <a href="#" className="subtitle-documents">Угода користувача та Правила користування сервісом «MOOW»</a>
                            </div>
                            <div className="wrapper-subtitle__documents" >
                                <img className="documents-img" alt="DocumentsImg" src={DocumentsImg} ></img>
                                <a href="#" className="subtitle-documents">Політика конфіденційності</a>
                            </div>
                            <div className="wrapper-subtitle__documents" >
                                <img className="documents-img" alt="DocumentsImg" src={DocumentsImg} ></img>
                                <a href="#" className="subtitle-documents">Повідомлення про обробку персональних даних</a>
                            </div>
                        </div>




                        <button className="close-documents" onClick={toggleDocuments}>

                        </button>
                    </div>
                </div>
            )}
        </>
    );
}


