import React,{useState} from 'react';
import './App.css';
import QuestionCard from './components/questionCard';
import APIFetch from './API';
import { questionState } from './API';

//styles
import { GlobalStyle , Wrapper } from './App.styles';
//types
  
type Answerobj = {
  answer : string
  question : string
  correct : boolean
  correctAns : string
}
function App() {
  //constant
  const TOTAL_QUESTIONS = 30;

  //states
  const [loading,setLoading] = useState(false);
  const [questions , setQuestions] = useState<questionState[]>([]);
  const [quesNumber , setQuesNumber ] = useState(0);
  const [userAnswer , setUserAnswer] = useState<Answerobj[]>([]);
  const [score , setScore] = useState(0);
  const [gameOver , setGameOver] = useState(true);

  console.log(questions);
  //start of quiz
  const startQuiz = async () =>{
    setLoading(true);
    setGameOver(false);
    const all_questions = await APIFetch(TOTAL_QUESTIONS , 'medium');
    setQuestions(all_questions);
    setScore(0);
    setQuesNumber(0);
    setUserAnswer([]);
    setLoading(false);
  }

  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>)=>{
      if(!gameOver)
      {
        //get the answer
        const answer = e.currentTarget.value;
        //check the answer
        const correct = questions[quesNumber].correct_answer === answer;
        // inrement score
       if(correct)
          setScore(prevScore => prevScore + 1);

        //add to the answer Object
        const answerObj = {
          question : questions[quesNumber].question,
          answer,
          correct,
          correctAns : questions[quesNumber].correct_answer
        }

        setUserAnswer(prevAns => [...prevAns , answerObj]);
        

      }
  }
   console.log(userAnswer)
  const nextQuestion = () =>{
      const nextQuesNum = quesNumber + 1;
      // check for last question and set game over to true
      if(nextQuesNum === TOTAL_QUESTIONS)
      {
        setGameOver(true);
      }else{
        setQuesNumber(nextQuesNum);
      }
  }

  return (
    <>
      <GlobalStyle/>
        <Wrapper>
        <h1>Quiz App</h1>
        {gameOver || userAnswer.length === TOTAL_QUESTIONS ?  (<button className='start' onClick={startQuiz}>Start Quiz</button>) : null}
        {!gameOver &&  <p className='score'>Score: {score}</p>}
        {loading && <p>Loading Questions...</p>}
        {(!loading && !gameOver) && (
            <QuestionCard
            question={questions[quesNumber].question}
            answers ={questions[quesNumber].answers}
            callback={checkAnswers}
            userAns ={userAnswer ? userAnswer[quesNumber] : ''}
            quesNum = {quesNumber + 1}
            totalQues = {TOTAL_QUESTIONS}
          />
        )}
          

        {(!gameOver && !loading && userAnswer.length === quesNumber + 1 && quesNumber + 1 !== TOTAL_QUESTIONS) && <button className='next' onClick={nextQuestion}>Next Question</button>}
      </Wrapper>
    </>
  );
}

export default App;
