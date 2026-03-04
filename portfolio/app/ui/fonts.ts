import localFont from 'next/font/local'

export const dogica = localFont({
    src:[
    {
        path: './dogica.ttf',
        weight: '400',
        style: 'normal',
    },
    {
        path: './dogicalbold.ttf',
        weight: '700',
        style: 'italic',
    },
    ],

    variable: '--font-dogica',
})

export const dogicaPixel = localFont({
    src: [
        {
        path: './dogicapixel.ttf',
        weight: '400',
        style: 'pixel',
        },
        {
            path:'./dogicalpixelbold.ttf',
            weight: '700',
            style: 'pixelbold',
        },
    ],

    variable: '--font-dogicalPixel',
})




