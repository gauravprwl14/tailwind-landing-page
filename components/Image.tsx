import React from 'react'
import { ImageContainerType } from '../types/commonTypes'

const ImageContainer = ({ src }: ImageContainerType) => {
    return (
        <div className='flex-1 pr-4'>
            <div className={"w-full h-full flex items-center"}>
                <img src={src} width={'100%'} style={{ height: 'inherit' }} />
            </div>
        </div>
    )
}



export default ImageContainer