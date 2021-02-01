/* eslint-disable @typescript-eslint/no-var-requires */
const imagemin = require('imagemin')
const webp = require('imagemin-webp')
const fse = require('fs-extra')

imagemin( ['src/images/*.{jpg,png}'], {
    destination: 'public/images',
    plugins: [
        webp({ quality: 90 })
    ]
})

fse.copy('src/images/', 'public/images/').then(() => {
    console.log('Сopying images completed successfully')
})
