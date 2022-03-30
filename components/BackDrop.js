import React from 'react'
const BackDrower = ({show,click}) => {
  return (show &&
    <div className='backdrop' onClick={click}></div>
  )
}

export default BackDrower