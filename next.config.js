/** @type {import("next").NextConfig} */
const path = require("path")

const nextConfig = {
	reactStrictMode: true,
	output: "export",

	sassOptions: {
		includePaths: [path.join(__dirname, "src")],
	},
	webpack: (config) => {
		config.resolve.alias["@"] = path.join(__dirname, "src", "app")
		config.module.rules.push({
			loader: "@svgr/webpack",
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: true,
				svgo: false,
				svgoConfig: {
					plugins: [
						{
							name: "preset-default",
							params: {
								overrides: { removeViewBox: false },
							},
						},
					],
				},
				titleProp: false,
			},
		})

		return config
	},
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/main",
			},
		]
	},
	pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
	images: {
		unoptimized: true,
	},
}

module.exports = nextConfig
