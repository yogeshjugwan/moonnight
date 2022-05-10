import React from 'react'
const BackDrower = (props) => {
  return (props.show &&
    <div className='backdrop' onClick={props.click}></div>
  )
}

export default BackDrower