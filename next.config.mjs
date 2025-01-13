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
};

export default withContentlayer(nextConfig);
