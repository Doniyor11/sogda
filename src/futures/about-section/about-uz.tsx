import { Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import React from "react"

import IconThree from "@/shared/assets/images/icon-global.svg"
import IconOne from "@/shared/assets/images/icon-note.svg"
import IconTwo from "@/shared/assets/images/icon-users.svg"
import { SectionLabel } from "@/shared/ui/section-label"

import s from "./styles.module.scss"

export const AboutSectionUz = () => {
	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<div id={"section1"} className={cx(s.sectionWrapper, "container")}>
			<SectionLabel text={"Kompaniya haqida"} />
			<Text className={s.title}>
				ООО «SOGDA UNITED TRADE»
				<span>
					Biz har doim yangi takliflarga ochiqmiz, o'zaro manfaatli sheriklikka
					intilamiz.
				</span>
			</Text>
			<Flex direction={matches ? "column" : "row"} gap={matches ? 16 : 20}>
				<Text className={s.text}>
					Biz bozorda 2017 yildan beri sifatli tibbiy mahsulotlar, tibbiy
					mahsulotlar va parafarmatsevtika mahsulotlarini taklif qilib
					kelmoqdamiz. Shuningdek, biz sut mahsulotlarini ishlab chiqarish uchun
					xom ashyoning alohida tarkibiy qismlarini ulgurji sotish bilan
					shug'ullanamiz.
				</Text>
				<Text className={s.text}>
					Kompaniyamiz o'zbekistonlik hamkorlar bilan faol hamkorlik qilmoqda va
					qo'shni davlatlar, zamonaviy biznes usullariga tayanib. Bizning
					ishimiz quyidagi printsiplarga asoslanadi:
				</Text>
			</Flex>

			<div id={"section2"} className={s.cards}>
				<div className={s.card}>
					<IconOne />
					<Text>
						Chuqur bozor tadqiqotlariga asoslangan optimal strategiya.
					</Text>
				</div>
				<div className={s.card}>
					<IconTwo />
					<Text>
						Qulay va uzoq muddatli hamkorlikni yaratish uchun har bir sherikga individual yondashuv.
					</Text>
				</div>
				<div className={s.card}>
					<IconThree />
					<Text>
						Yangi mahsulotlar va ilg'or boshqaruv sxemalarini joriy etish.
					</Text>
				</div>
			</div>
		</div>
	)
}
