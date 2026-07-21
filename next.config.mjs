/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Thêm các hostname nếu dùng external image URL trong MenuItem.imageUrl
      // Ví dụ: { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  // Tắt X-Powered-By header để không lộ framework
  poweredByHeader: false,
};

export default nextConfig;
