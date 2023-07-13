import React from 'react'

type PersonProps = {
    name : {
        first : string
        last : string
    }
}
const Person = (props : PersonProps) => {
  return (
    <div>
        <h2>My name is {props.name.first} {props.name.last}</h2>
    </div>
  )
}

export default Person