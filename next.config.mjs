import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
		optimizePackageImports: ["@chakra-ui/react"],
	},
	images: {
		remotePatterns: [{ hostname: "*.public.blob.vercel-storage.com" }],
	},
	env: {
		  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
		  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
		},
};

export default withContentlayer(nextConfig);
