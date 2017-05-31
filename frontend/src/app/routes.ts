// src/app/routes.ts
import {Home} from './components/home';     // ./components/home/index.ts

export default [
    {path: '/', component: Home, name: 'Home'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/hakkimizda', loader: () => require('./components/about')('About'), name: 'About'},
    {path: '/internetten-fal-nasil-bakilir', loader: () => require('./components/howitworks')('HowItWorks'), name: 'HowItWorks'},
    {path: '/yorumcular', loader: () => require('./components/sibyls')('Sibyls'), name: 'Sibyls'},
    {path: '/fallar', loader: () => require('./components/products')('Products'), name: 'Products'},
    {path: '/medya', loader: () => require('./components/media')('Media'), name: 'Media'},
    {path: '/iletisim', loader: () => require('./components/contact')('Contact'), name: 'Contact'}
];
