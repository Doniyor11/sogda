import { Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import React from "react"

import IconThree from "@/shared/assets/images/icon-global.svg"
import IconOne from "@/shared/assets/images/icon-note.svg"
import IconTwo from "@/shared/assets/images/icon-users.svg"
import { SectionLabel } from "@/shared/ui/section-label"

import s from "./styles.module.scss"

export const AboutSection = () => {
	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<div id={"section1"} className={cx(s.sectionWrapper, "container")}>
			<SectionLabel text={"О компании"} />
			<Text className={s.title}>
				ООО «SOGDA UNITED TRADE»
				<span>
					Мы всегда открыты к новым предложениям, стремясь к взаимовыгодному
					партнерству.
				</span>
			</Text>
			<Flex direction={matches ? "column" : "row"} gap={matches ? 16 : 20}>
				<Text className={s.text}>
					Мы работаем на рынке с 2017 года, предлагая качественные медицинские
					изделия, товары медицинского назначения и парафармацевтическую
					продукцию. Мы также занимаемся оптовой реализацией отдельных
					компонентов сырья для производства молочной продукции.
				</Text>
				<Text className={s.text}>
					Наша компания активно сотрудничает с партнерами из Узбекистана и стран
					ближнего зарубежья, опираясь на современные методы ведения бизнеса. В
					основе нашей работы лежат следующие принципы:
				</Text>
			</Flex>

			<div id={"section2"} className={s.cards}>
				<div className={s.card}>
					<IconOne />
					<Text>
						Оптимальная стратегия, основанная на глубоких маркетинговых
						исследованиях рынка.
					</Text>
				</div>
				<div className={s.card}>
					<IconTwo />
					<Text>
						Индивидуальный подход к каждому партнеру для создания комфортного и
						долгосрочного сотрудничества.
					</Text>
				</div>
				<div className={s.card}>
					<IconThree />
					<Text>
						Внедрение новых продуктов и передовых управленческих схем.
					</Text>
				</div>
			</div>
		</div>
	)
}
