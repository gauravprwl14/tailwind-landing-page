export const __DEV__ = process.env.NODE_ENV === 'development'

export const trimExtension = (str: String) => {
    return str.replace(/\.[^/.]+$/, "")

}


export const handleGetInTouch = (e: any) => {
    if (e && e.preventDefault) {
        e.preventDefault()
    }

    // @ts-ignore
    if (window && window.tidioChatApi.open()) {
        // @ts-ignore
        window.tidioChatApi.open()
    }
}