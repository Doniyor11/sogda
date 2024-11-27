import { AppProps } from "next/app"
import React from "react"

import { Layout } from "@/widgets/layout"

import "@/shared/styles/app.scss"

import { withHocs } from "./lib/with-hocs"

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default withHocs(App)
