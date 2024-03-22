/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
      },
    webpack: (
        config, 
        { buildId, dev, isServer, defaultLoaders, webpack }
        ) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
         'window.jQuery': 'jquery',
      }));
return config;
    },
};

export default nextConfig;