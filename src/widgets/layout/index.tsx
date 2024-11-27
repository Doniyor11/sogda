import React from "react"

import { Footer } from "@/widgets/layout/footer"
import { Navbar } from "@/widgets/layout/navbar"

export const Layout = ({ children }: { children: any }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
