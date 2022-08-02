export const __DEV__ = process.env.NODE_ENV === 'development'

export const trimExtension = (str: String) => {
    return str.replace(/\.[^/.]+$/, "")

}