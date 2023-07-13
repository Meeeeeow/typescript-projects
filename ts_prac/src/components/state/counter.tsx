import React , {useReducer , useState} from 'react'
const initialState = {
    count : 0
}

type CountState = {
    count : number
}

type ActionState = {
    type : 'increment' | 'decrement'
    payload : number
}
type ResetState ={
    type: 'reset'
}
const reducer = (state : CountState, action : ActionState | ResetState) =>{
    switch(action.type)
    {
        case 'increment':
            return {
                count : state.count + action.payload
            }
        case 'decrement':
            return {
                count : state.count - action.payload
            }
        case 'reset':
            return{
                count : 0
            }
        default: 
            return state;
    }
}
const Counter = () => {
    const [state , dispatch] = useReducer(reducer , initialState)
    const [val , setVal] = useState(0);
    const handleChange= (e : React.ChangeEvent<HTMLInputElement>)=>{
        setVal(Number(e.target.value))
    }

    const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>) =>{
        console.log(e)
        setVal(0);
        dispatch({type : 'reset'})
    }
  return (
    <div>
        <h2>Count {state.count}</h2><br/>
        <input type="number" onChange={handleChange} /> <br/>
        <button type="button" onClick={()=>{dispatch({type:'increment' , payload: val})}}>{`Increment ${val}`}</button>
        <button type="button" onClick={()=>{dispatch({type:'decrement' , payload: val})}}>{`Decrement ${val}`}</button>
        <button type="submit" onClick={handleSubmit}>Reset</button>
    </div>
  )
}

export default Counter