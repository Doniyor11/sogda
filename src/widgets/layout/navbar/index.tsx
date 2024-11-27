import { Anchor } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import LogoMobile from "@/shared/assets/images/footer-logo.svg"
import IconPhone from "@/shared/assets/images/icon-phone.svg"
import Logo from "@/shared/assets/images/logo-text.svg"
import { handleScrollIntoView } from "@/shared/libs/functions.ts"

import s from "./styles.module.scss"

export const Navbar = () => {
	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<div className={s.navbar}>
			{matches && <LogoMobile className={s.logo} />}
			<div className={s.navbarLeft}>
				<Logo />
				<ul>
					<li onClick={() => handleScrollIntoView(1)}>О нас</li>
					<li onClick={() => handleScrollIntoView(2)}>Руководство</li>
					<li onClick={() => handleScrollIntoView(3)}>Контакты</li>
					<li onClick={() => handleScrollIntoView(4)}>Мы на карте</li>
				</ul>
			</div>
			<Anchor href={"tel:+998981706000"} className={s.tel}>
				<IconPhone />
				+998 (98) 170 - 60 - 00
			</Anchor>
		</div>
	)
}
