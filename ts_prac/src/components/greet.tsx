import React from 'react'

type GreetProps = {
    name : string
    numMsgs ?: number
    isLoggedIn : boolean
}
const Greet = (props : GreetProps) => {
  const {numMsgs = 0} = props;
  return (
    <h2>
        {props.isLoggedIn ? `Welcome ${props.name}. You have ${numMsgs} messages in your archive.` : 'Welcome Guest'}
    </h2>
  )
}

export default Greet