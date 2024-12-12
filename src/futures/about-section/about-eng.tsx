import { Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import React from "react"

import IconThree from "@/shared/assets/images/icon-global.svg"
import IconOne from "@/shared/assets/images/icon-note.svg"
import IconTwo from "@/shared/assets/images/icon-users.svg"
import { SectionLabel } from "@/shared/ui/section-label"

import s from "./styles.module.scss"

export const AboutSectionEng = () => {
	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<div id={"section1"} className={cx(s.sectionWrapper, "container")}>
			<SectionLabel text={"About the company"} />
			<Text className={s.title}>
				ООО «SOGDA UNITED TRADE»
				<span>
					We are always open to new proposals, striving for mutually beneficial
					partnerships.
				</span>
			</Text>
			<Flex direction={matches ? "column" : "row"} gap={matches ? 16 : 20}>
				<Text className={s.text}>
					We have been operating in the market since 2017, offering high-quality
					medical products, healthcare goods, and parapharmaceutical products.
					We also engage in the wholesale supply of specific raw material
					components for dairy production.
				</Text>
				<Text className={s.text}>
					Our company actively cooperates with partners from Uzbekistan and
					neighboring countries, relying on modern business methods. Our work is
					based on the following principles:
				</Text>
			</Flex>

			<div id={"section2"} className={s.cards}>
				<div className={s.card}>
					<IconOne />
					<Text>An optimal strategy based on in-depth market research.</Text>
				</div>
				<div className={s.card}>
					<IconTwo />
					<Text>
						An individualized approach to each partner to foster comfortable and long-term cooperation.
					</Text>
				</div>
				<div className={s.card}>
					<IconThree />
					<Text>
						Introduction of new products and advanced management systems.

					</Text>
				</div>
			</div>
		</div>
	)
}
