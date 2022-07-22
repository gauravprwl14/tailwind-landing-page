import React from 'react'
import { ButtonPropTypes } from '../types/commonTypes'

const Button = ({ text }: ButtonPropTypes) => {
    return (
        <div className=''>
            <div className='p-3 px-6 pt-2 text-veryLightGray bg-electricGree rounded-lg w-auto inline-block'>
                <div className='flex flex-row '>
                    {text} <img className='ml-2' src="img/right_arrow.svg" />
                </div>
            </div>

        </div>
    )
}

export default Button