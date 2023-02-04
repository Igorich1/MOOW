import React from 'react'
import './Question.css'
import { useState } from 'react';
const Question = () => {
    const [shoNebud, setShoNebud] = useState(false);
   

    return (
        <div className='wrapper-question' >
            <div className='container-question'>
                <div className='box-question' >
                        <h1 className='title-question' >Залишились запитання?</h1>
                        <p className='subtitle-question' >Перейди на сторінку FAQ, там є відповіді на часті запитання. А якщо все ж не знайшдеш відповіді на запитання, звернись до нашого чат-боту! </p>
                   

                    <div className='container-button__question' >
                        <button className='button-faq' >Перейди до FAQ</button>
                        <>
                        <button onClick={() => setShoNebud(!shoNebud)}
                         className='button-bot' >Написати через чат-бот</button>
                        {shoNebud ? <div className='loh'>bhvnbcht mnhvvhv v loh</div> : null}
                        </>
                    </div>
                    <p className='bottom-tile__question'>Середній час відповіді у чат-боті в робочий час (понеділок – п'ятниця, з 10:00 до 18:00) – 2 години.
                        При високому завантаженні термін очікування відповіді може бути збільшено. У вихідні дні ми відповідаємо протягом доби.</p>
                </div>
            </div>


        </div>
    )
}

export default Question
