import React from 'react'

const Button = ({ text }) => {
    return (
        <div className=''>
            <div className='p-3 px-6 pt-2 text-veryLightGray bg-electricGreen rounded-lg w-auto inline-block'>
                <div className='flex flex-row '>
                    {text} <img className='ml-2' src="img/right_arrow.svg" />
                </div>
            </div>

        </div>
    )
}

export default Button