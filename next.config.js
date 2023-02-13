/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key:
      'pk.eyJ1Ijoia2dvbnphbGVzMTE5MyIsImEiOiJjbGUzMDl6NWYwNDZtM3dvNXVmbXRqaG9uIn0.wW2AxpbIQBv1BgnG4CwNmg',
  },
};

module.exports = nextConfig;
