

console.log('%c process env ', 'background: lime; color: black', { env: process.env });
console.log('%c process env production', 'background: lime; color: black', { env: process.env.production });

export const ROUTES = {
    'home': '/',
    'aboutUs': '/about-us.html',
    'services': '/services.html'
}