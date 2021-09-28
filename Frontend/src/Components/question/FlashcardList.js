import React from 'react'
import './Flashcard.scss'
import { useState } from 'react'
import Flashmain from './Flashmain.js'

function FlashcardList({ currentQuestion }) {
  const [checked, setChecked] = useState(false)
  return (
    <div className='questionairecontainer'>
      <div className='questioncontainer'>
        {currentQuestion ? <div>{currentQuestion.question}</div> : ''}
      </div>
      <div className='answercontainer'>
        {currentQuestion?.answers?.map((a) => (
          <div className='answers'>
            <input className='answerinput' type='checkbox' value={checked} />

            <p className='showanswer'>{a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlashcardList
