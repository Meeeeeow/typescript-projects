import React from 'react'
import { inputProps } from './input.types';

const Input = ({ value } : inputProps) => {
    const handleChange = ( event :React.ChangeEvent<HTMLInputElement>  , nums : number[]) =>{
        console.log("Value Changed");
       console.log(event.target.value);
       
         nums.map(item =>{
           console.log(item)
           return '';
         })
    }
  return (
    <div>
        <input type="text" value={value} onChange={(event)=>handleChange(event,[1,2,3,4])}></input>
    </div>
  )
}

export default Input