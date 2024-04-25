/** @type {import('next').NextConfig} */
import { resolve } from 'path';

const APP_ROOT = resolve();

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  sassOptions: {
    includePaths: [resolve(APP_ROOT, 'scss')],
    prependData: '@import "@scss/mixin/index.scss";',
  },
};

export default nextConfig;
