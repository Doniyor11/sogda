import { Button, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import Logo from "@/shared/assets/images/big-logo.png"
import { handleScrollIntoView } from "@/shared/libs/functions.ts"

import s from "./styles.module.scss"

export const MainSectionEng = () => {
	return (
		<>
			<div className={s.sectionWrapper}>
				<div className={s.sectionLeft}>
					<Text className={s.infoText}>
						Partnership for your business
					</Text>
					<h1>
						SOGDA <br />
						UNITED TRADE
					</h1>
					<Text className={s.description}>
						Wholesale sales of medical devices and components
						for dairy products. Work with the industry leader
						in Uzbekistan and neighboring countries.
					</Text>
					<Button onClick={() => handleScrollIntoView(3)} className={s.btn}>
						Book a consultation
					</Button>
				</div>
				<Image
					className={s.image}
					width={600}
					height={600}
					src={Logo}
					alt={"logo"}
				/>
			</div>
		</>
	)
}
