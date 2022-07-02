

console.log('%c process env ', 'background: lime; color: black', { env: process.env });
console.log('%c process env production', 'background: lime; color: black', { env: process.env.production });

export let ROUTES = {
    'home': '/',
    'aboutUs': '/about-us.html',
    'services': '/services.html'
}

if (process.env.NODE_ENV === 'development') {
    ROUTES = {
        'home': '/',
        'aboutUs': '/about-us',
        'services': '/services'
    }
}



export default ROUTES