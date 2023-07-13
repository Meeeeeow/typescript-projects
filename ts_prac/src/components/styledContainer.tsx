import React from 'react'

type StyleContainerProps = {
    styles : React.CSSProperties

    
}
const StyledContainer = (props : StyleContainerProps) => {
  return (
    <div style={props.styles}>
        This is an inline styled container.
    </div>
  )
}

export default StyledContainer