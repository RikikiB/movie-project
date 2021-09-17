import React from 'react'

function Quizpage() {
  return (
    <div>
      <div className='Question'>
        <h1> What Genre are you Intrested in?</h1>
      </div>
      <div className='Answerbox'>
        <input
          type='radio'
          id='html'
          name='fav_language'
          value='HTML'
        ></input>
      </div>
    </div>
  )
}
const Answer = () => {
  const data = [1, 2, 3]

  return (
    <div className='Answer'>
      {data.map((Answers) => (
        <div className='Answerbox'>answer</div>
      ))}
    </div>
  )
}

export default Quizpage
