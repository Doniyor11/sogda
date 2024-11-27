import { Button, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import Logo from "@/shared/assets/images/big-logo.png"
import { handleScrollIntoView } from "@/shared/libs/functions.ts"

import s from "./styles.module.scss"

export const MainSectionUz = () => {
	return (
		<>
			<div className={s.sectionWrapper}>
				<div className={s.sectionLeft}>
					<Text className={s.infoText}>
						Sizning biznesingiz uchun hamkorlik
						ishonchli yetkazib beruvchi bilan
					</Text>
					<h1>
						SOGDA <br />
						UNITED TRADE
					</h1>
					<Text className={s.description}>
						Tibbiy buyumlar va butlovchi qismlarni ulgurji sotish
						sut mahsulotlari uchun. Sanoat rahbari bilan ishlash
						O'zbekistonda va yaqin xorijiy mamlakatlarda.
					</Text>
					<Button onClick={() => handleScrollIntoView(3)} className={s.btn}>
						Konsultatsiyaga buyurtma bering
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
