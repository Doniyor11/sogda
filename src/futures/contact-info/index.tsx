import { Anchor, Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import IconThree from "@/shared/assets/images/icon-mail.svg"
import IconTwo from "@/shared/assets/images/icon-phone-blue.svg"
import IconOne from "@/shared/assets/images/icon-pin.svg"
import { SectionLabel } from "@/shared/ui/section-label"

import s from "./styles.module.scss"

export const ContactInfo = () => {
	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<div className={s.wrapper}>
			<SectionLabel text={"Свяжитесь с нами"} />
			<div className={s.box}>
				<Text className={s.title}>Контакты</Text>
				<div className={s.boxItem}>
					<IconOne />
					<Box>
						<Text className={s.label}>Адрес:</Text>
						<Text className={s.text}>
							Республика Узбекистан, г. Самарканд, <br /> ул. М. Хайдарова 29
						</Text>
					</Box>
				</div>
				<div className={s.boxItem}>
					<IconTwo />
					<Box>
						<Text className={s.label}>Телефон:</Text>
						<Anchor href={"tel:+998981706000"} className={s.text}>
							+998 (98) 170 - 60 - 00
						</Anchor>
					</Box>
				</div>
				<div className={s.boxItem}>
					<IconThree />
					<Box>
						<Text className={s.label}>Телефон:</Text>
						<Anchor href={"mailto:info@sogda-united.uz"} className={s.text}>
							info@sogda-united.uz
						</Anchor>
					</Box>
				</div>
				<Flex gap={20} mt={24} direction={matches ? "column" : "row"}>
					<Anchor href={"tel:+998981706000"} className={s.btn}>
						<IconTwo />
						Позвонить в компанию
					</Anchor>
					<Anchor href={"mailto:info@sogda-united.uz"} className={s.btn}>
						<IconThree />
						Написать на почту
					</Anchor>
				</Flex>
			</div>
		</div>
	)
}
