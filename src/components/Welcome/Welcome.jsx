import React from 'react'

const Welcome = (props) => {
    
  return (
    <div>
        Welcome to our first page in React {props.name} {props.lastname}
    </div>
  )
}

export default Welcome