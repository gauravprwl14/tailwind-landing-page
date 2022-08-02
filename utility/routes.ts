
import { __DEV__ } from './helper'

export let ROUTES = {
    'home': '/',
    'aboutUs': '/about-us.html',
    'services': '/services.html'
}

if (__DEV__) {
    ROUTES = {
        'home': '/',
        'aboutUs': '/about-us',
        'services': '/services'
    }
}



export default ROUTES