import React from 'react'

type StatusProps = {
    status : "loading" | "success" | "error"
}
const Status = (props : StatusProps) => {
    let message;
    if(props.status === "loading")
    {
        message = "Data is loading..."
    }
    else if(props.status === "success")
    {
        message = "Data fetched successfully"
    }
    else if(props.status === "error")
    {
        message = "Error in data detection"
    }
  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}

export default Status