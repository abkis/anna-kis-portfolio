import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
		optimizePackageImports: ["@chakra-ui/react"],
	}
};

export default withContentlayer(nextConfig);
