import React from 'react'

const answer = ({group, question, id}) => {
  return (
    <label>
      <input type="radio" id={id} name={group} />
      {question}
    </label>
  )
}

export default answer
