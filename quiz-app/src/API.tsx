
import Utils from './utils'
export type QuestionProps = {
  category : string
  correct_answer : string
  difficulty : string
  incorrect_answers : string[]
  question : string
  type : string
}

export type questionState = QuestionProps & { answers : string[]};

const APIFetch = async (amount:number , difficulty : 'easy' | 'medium' | 'hard') => {
  const httpLink = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;

  const data = await (await fetch(httpLink)).json();
  console.log(data);
  
  return (
    
    data.results.map((question : QuestionProps) =>(
      {
        ...question,
        answers : Utils([...question.incorrect_answers , question.correct_answer])
      }
    ))
    
  )
}

export default APIFetch