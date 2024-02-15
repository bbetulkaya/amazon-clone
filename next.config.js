module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "**",
      },
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
