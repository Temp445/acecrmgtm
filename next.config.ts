import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const basePath = '/products/ace-customer-relationship-management-system';

const nextConfig: NextConfig = {
  basePath,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'px.ads.linkedin.com',
      },
    ],
    unoptimized: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `${basePath}/_next/static/videos`,
            outputPath: 'static/videos',
            name: '[name].[hash].[ext]',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);