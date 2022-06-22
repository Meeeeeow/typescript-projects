import React from 'react';
import {Wrapper , ButtonWrapper} from './questionCard.styles';
type questionCardProps = {
    question : string
    answers : string[]
    callback : (e:React.MouseEvent<HTMLButtonElement>)=>void
    userAns : any
    quesNum : number
    totalQues : number
}
const QuestionCard = ({question,
    answers,
    callback,
    userAns,
    quesNum,
    totalQues}:questionCardProps) => {
  return (
    <Wrapper>
      <p className='number'>
        Question: {quesNum} / {totalQues}
      </p>
      <p dangerouslySetInnerHTML={{__html : question}}/>
      <div>
        {
          answers.map((answer,index)=>(
            <ButtonWrapper 
            key={index}
            correct= {userAns?.correctAns === answer}
            userSelect= {userAns?.answer === answer}
            >
                <button disabled={userAns} value={answer} onClick={callback}>
                  <span dangerouslySetInnerHTML={{__html : answer }}/>
                </button>
            </ButtonWrapper>
          ))
        }
      </div>
    </Wrapper>
  )
}

export default QuestionCard