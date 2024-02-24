/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.schwaebische-post.de",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

// https://www.google.com/maps/place/Sportpark+Moldenberg/@48.7013366,10.1827379,17z/data=!3m1!4b1!4m6!3m5!1s0x479917f3afcd7abd:0xb03d99fd74a9d3b6!8m2!3d48.7013331!4d10.1853182!16s%2Fg%2F11fm6p8332?entry=ttu
// https://www.schwaebische-post.de/assets/images/27/833/27833941-schoene-ausblicke-gibt-es-am-schnaitheimer-moldenberg-2RMH.jpg

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   compiler: {
//     styledComponents: true,
//   },
//   reactStrictMode: true,
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
//   // images: {
//   //   remotePatterns: [
//   //     {
//   //       protocol: "https",
//   //       hostname: "images.unsplash.com",
//   //       port: "",
//   //       pathname:
//   //     },
//   //   ],
//   // },
// };

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   compiler: {
//     styledComponents: true,
//   },
//   reactStrictMode: true,
//   imageUrl:
//     "https://mobilet.eu/de/wp-content/uploads/sites/2/2021/04/heidenheim-stadt-1920x960.jpg",
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
//   images: {
//     domains: ["mobilet.eu"],
//     // Add other image configurations if needed
//   },
// };

// module.exports = nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.example.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }
