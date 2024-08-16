import React from 'react'

const Button = ({ onClick, text, type, disabled }) =>
{
    return (
        <button onClick={onClick} type={type} className='w-full bg-primary rounded-md text-white shadow-md py-2' disabled={disabled}>
            {text}
        </button>
    )
}

export default Button