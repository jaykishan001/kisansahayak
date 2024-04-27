import React, { useId } from 'react'

function Input({type= "text", placeholder, label, ...props}, ref) {

  return (
    <div className='w-full'>
        {label && <label>{label}</label>}
        <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
        />
    </div>
  )
}

export default Input