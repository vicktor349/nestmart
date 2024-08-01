import React from 'react'

const Message = ({ date, message, title }) =>
{
    return (
        <div className='border border-solid border-gray-300 max-w-6xl'>
            <div className='p-6'>
                <p>{date}</p>
                <div className='space-y-3'>
                    <p className='font-semibold text-lg'>{title}</p>
                    <p className='text-[#666]'>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Message