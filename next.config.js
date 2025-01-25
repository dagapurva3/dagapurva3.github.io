/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
console.log(isProd)
const nextConfig = {
    output: 'export',
    basePath: isProd ? '/dagapurva3.github.io' : '',
    assetPrefix: isProd ? '/dagapurva3.github.io/' : '',
    images: {
        unoptimized: true,
    },
    env: {
        TEMPLATE_ID: process.env.TEMPLATE_ID,
        SERVICE_ID: process.env.SERVICE_ID,
        PUBLIC_KEY: process.env.PUBLIC_KEY,
    },
}

module.exports = nextConfig
