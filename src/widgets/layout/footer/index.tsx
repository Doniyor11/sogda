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

export const Footer = () => {
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
						<li onClick={() => handleScrollIntoView(1)}>О нас</li>
						<li onClick={() => handleScrollIntoView(2)}>Сотрудники</li>
						<li onClick={() => handleScrollIntoView(3)}>Контакты</li>
						<li onClick={() => handleScrollIntoView(4)}>Мы на карте</li>
					</ul>

					<ul>
						<li>
							<Anchor>
								<IconOne />
								г. Самарканд, Республика Узбекистан
							</Anchor>
						</li>
						<li>
							<Anchor href={"tel:+998981706000"}>
								<IconTwo />
								+998 (98) 170 - 60 - 00
							</Anchor>
						</li>
						<li>
							<Anchor href={"mailto:info@sogda-united.uz"}>
								<IconThree />
								info@sogda-united.uz
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
					<Text>2024, ООО «SOGDA UNITED TRADE»</Text>
					<Text>Политика конфиденциальности</Text>
				</Flex>
			</div>
		</div>
	)
}
