import React from 'react'


const ImageContainer = ({ src }) => {
    return (
        <div className='flex-1 pr-4'>
            <div className={"w-full h-full relative items-center"}>
                <img src={src} width={'100%'} style={{ height: 'inherit' }} />
            </div>
        </div>
    )
}


export default ImageContainer