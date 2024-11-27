import { Anchor, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import React from "react"

import Logo from "@/shared/assets/images/footer-logo.svg"
import IconThree from "@/shared/assets/images/icon-mail.svg"
import IconTwo from "@/shared/assets/images/icon-phone-blue.svg"
import IconOne from "@/shared/assets/images/icon-pin.svg"
import { handleScrollIntoView } from "@/shared/libs/functions.ts"

import s from "./styles.module.scss"

interface IFooterProps {
	aboutText?: string
	employeesText?: string
	contactsText?: string
	mapText?: string
	addressText?: string
	phoneNumber?: string
	phoneLabel?: string
	email?: string
	emailLabel?: string
	copyrightText?: string
	privacyPolicyText?: string
}

export const Footer: React.FC<IFooterProps> = ({
	aboutText = "О нас",
	employeesText = "Сотрудники",
	contactsText = "Контакты",
	mapText = "Мы на карте",
	addressText = "г. Самарканд, Республика Узбекистан",
	phoneNumber = "+998981706000",
	phoneLabel = "+998 (98) 170 - 60 - 00",
	email = "info@sogda-united.uz",
	emailLabel = "info@sogda-united.uz",
	copyrightText = "2024, ООО «SOGDA UNITED TRADE»",
	privacyPolicyText = "Политика конфиденциальности",
}) => {
	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<div className={s.footer}>
			<div className={cx(s.container, "container")}>
				<Flex
					w={"100%"}
					gap={matches ? 24 : 120}
					direction={matches ? "column" : "row"}
				>
					<Logo className={s.logo} />
					<ul>
						<li onClick={() => handleScrollIntoView(1)}>{aboutText}</li>
						<li onClick={() => handleScrollIntoView(2)}>{employeesText}</li>
						<li onClick={() => handleScrollIntoView(3)}>{contactsText}</li>
						<li onClick={() => handleScrollIntoView(4)}>{mapText}</li>
					</ul>

					<ul>
						<li>
							<Anchor>
								<IconOne />
								{addressText}
							</Anchor>
						</li>
						<li>
							<Anchor href={`tel:${phoneNumber}`}>
								<IconTwo />
								{phoneLabel}
							</Anchor>
						</li>
						<li>
							<Anchor href={`mailto:${email}`}>
								<IconThree />
								{emailLabel}
							</Anchor>
						</li>
					</ul>
				</Flex>

				<Flex
					mt={matches ? 32 : 100}
					w={"100%"}
					gap={matches ? 16 : 70}
					align={"center"}
					justify={"center"}
					direction={matches ? "column" : "row"}
				>
					<Text>{copyrightText}</Text>
					<Text>{privacyPolicyText}</Text>
				</Flex>
			</div>
		</div>
	)
}
