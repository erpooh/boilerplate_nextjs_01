/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["antd-mobile"],
    reactStrictMode: false,
    assetPrefix: "",
    trailingSlash: true,
    webpack5: true,
    env: {
        STAGE: process.env.STAGE,
        URL: process.env.URL,
        API_URL: process.env.API_URL,
    },
};

module.exports = nextConfig;
