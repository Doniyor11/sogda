import { Button, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import Logo from "@/shared/assets/images/big-logo.png"
import { handleScrollIntoView } from "@/shared/libs/functions.ts"

import s from "./styles.module.scss"

export const MainSection = () => {
	return (
		<>
			<div className={s.sectionWrapper}>
				<div className={s.sectionLeft}>
					<Text className={s.infoText}>
						Партнерство для вашего бизнеса с надежным поставщиком
					</Text>
					<h1>
						SOGDA <br />
						UNITED TRADE
					</h1>
					<Text className={s.description}>
						Оптовая реализация медицинских изделий и компонентов для молочной
						продукции. Работайте с лидером отрасли в Узбекистане и странах
						ближнего зарубежья.
					</Text>
					<Button onClick={() => handleScrollIntoView(3)} className={s.btn}>
						Заказать консультацию
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
