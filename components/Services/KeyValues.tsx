import React from 'react'
import ImageContainer from '../Image'
import { PointerType } from '../../types/commonTypes'

type BulletPointPropTypes = {
    pointers: PointerType[]
}


const KeyValuesJson = [
    {
        image: '/img/keyValue.svg',
        pointers: [
            {
                title: 'Collaborative & transparent',
                description: 'We work closely with you to gain a deep understanding of your challenges and then define the required deliverables to successfully meet those challenges. Throughout the JUMP™ journey we communicate clearly, consistently, and with exceptional visibility.'
            },
            {
                title: 'Deliver quick results',
                description: 'Don’t wait until the end of a project to see results. JUMP™ delivers value early and often with set deliverables at each stage of the journey. And because each stage builds on the previous, you continuously get ever-increasing value.'
            },
            {
                title: 'Eliminate risk',
                description: 'Defined deliverables at each JUMP™ stage ensure predictable results. If the deliverables don’t meet expectations, we can quickly adjust course. And since each stage is self-contained, the engagement can be ended at any stage while getting all  the value of the previou deliverables.'
            }
        ]
    }
]






const BulletPoint = ({ pointers }: BulletPointPropTypes) => {


    return <div>
        {
            pointers.map((pointer, index) => {
                return (
                    <div key={index} className="pointer-container py-2">
                        <div className='pointer-bullet-container mr-7'>
                            <img className='max-w-48' src="img/bullet_style_02.svg" />
                        </div>
                        <div>
                            <div className='bullet-point-style-02-text pl-3 '>{pointer.title}</div>
                            <div className='bullet-point-style-02-description pl-3 mt-2'>{pointer.description}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
}


const KeyValues = () => {
    const obj = KeyValuesJson[0]
    return <div className='section-container'>
        <div className='text-left'>
            <div className='h1 pb-3'> Our JUMP™ System </div>
            <div className='bullet-point-text pt-3'> Built on decades of successfully launching digital transformations projects, we developed JUMP™, our exclusive process-based system for successfully building and launching digital transformations.
                <br />
                <br />
                Each stage in the JUMP™ journey has a defined destination with a clear set of deliverables that provide immediate value.
            </div>
        </div>

        <div className='flex flex-row flex-1 h-full mt-4'>
            <ImageContainer src={obj.image} />
            <div className='flex flex-col flex-1 text-left justify-center pl-4'>
                <BulletPoint pointers={obj.pointers} />
            </div>
        </div>

    </div>
}

export default KeyValues