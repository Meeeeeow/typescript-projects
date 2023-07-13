import React from 'react'

type PersonsProps = {
    names : {
        first: string
        last : string
    }[],
    ages : number [];
}
const Persons = (props : PersonsProps) => {
  return (
    <div>
        {
            props.names.map(name =>(
                <h1 key={Math.random()}>My name from list is {name.first} {name.last}</h1>
            ))
        }

        {
             props.ages.map(age =>(
                 <h1 key={Math.random()}> Ages are {age}</h1>
             ))
        }
    </div>
  )
}

export default Persons