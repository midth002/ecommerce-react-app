/** @type {import('next').NextConfig} */

  module.exports = {
    reactStrictMode: true,
    // Allow images to be retrieved from stripe.com
    images: {
      domains: ["files.stripe.com"],
    },
    
  };




