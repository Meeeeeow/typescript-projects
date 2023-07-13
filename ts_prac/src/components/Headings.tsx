import React from 'react'

type HeadingProps = {
    children : string
}
const Headings = (props : HeadingProps) => {
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}

export default Headings