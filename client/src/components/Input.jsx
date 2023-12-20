import React from 'react'

const Input = ({type, placeholder, onchange, name}) => {
  return (
    <div className='input-wrapper'>
      <input 
    
      type={type}
      placeholder={placeholder}
      onChange={onchange}
      name={name}
      className='custom-input'
      
      />
    </div>
  )
}

export default Input
