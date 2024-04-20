import createNextIntlPlugin from 'next-intl/plugin';

const withIntlPlugin = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withIntlPlugin(nextConfig);
