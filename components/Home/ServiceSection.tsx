import React from 'react'


const Card = () => {
    return (
        <div> Card </div>
    )
}

const CardContainer = () => {
    return (
        <div>
            CardContainer
            <Card></Card>
        </div>
    )
}


const ServiceSection = () => {
    return (
        <div className='section-container'>

            <div className='title'>Take a journey with us  </div>
            <div className='description'>We are specifically focused on launching cloud-native projects. Our high-performance team will design, build, and launch the perfect solution for your unique challenges.  </div>
            <div> ----- </div>

            <div>
                <CardContainer />
            </div>

        </div>
    )
}

export default ServiceSection