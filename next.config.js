// @ts-check

const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "",
};

module.exports = withNextIntl(nextConfig);
