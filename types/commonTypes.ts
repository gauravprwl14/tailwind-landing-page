


export type ImageContainerType = {
    src: string
}


export type ButtonPropTypes = {
    text: string
}


export type PointerType = {
    title: string;
    description: string;
}

export type TestimonialUserDetailsType = {
    name: string;
    designation: string;
    profilePic: string;
}

export type TestimonialType = {
    userDetails: TestimonialUserDetailsType;
    testimonial: string;
}


export type ServiceImageType = {
    src: string;
    position: string;
    classes: string;
}
export type ServicePointersType = {
    title: string;
    description: string;
}

export type ServiceType = {
    id: string;
    image: ServiceImageType
    title: string;
    description: string;
    cta: {
        description: String;
        style: String;
    }
    pointers: ServicePointersType[]
    classes?: string;
}