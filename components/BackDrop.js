import React from 'react'

const BackDrower = ({show,click}) => {
  return (
    show &&
    <div className='backdrop' onClick={click}>BackDrower</div>
  )
}

export default BackDrower