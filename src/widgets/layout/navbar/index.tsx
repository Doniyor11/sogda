import { Anchor, Box, Flex } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

import IconEng from "@/shared/assets/images/eng.png"
import LogoMobile from "@/shared/assets/images/footer-logo.svg"
import IconPhone from "@/shared/assets/images/icon-phone.svg"
import Logo from "@/shared/assets/images/logo-text.svg"
import IconRu from "@/shared/assets/images/ru.png"
import IconUz from "@/shared/assets/images/uz.png"
import { handleScrollIntoView } from "@/shared/libs/functions.ts"

interface INavbarProps {
	menuItems: { label: string; section: number }[]
}

import s from "./styles.module.scss"

export const Navbar = ({ menuItems }: INavbarProps) => {
	const router = useRouter()
	const matches = useMediaQuery("(max-width: 992px)")
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div className={cx(s.navbar, { [s.fixed]: isScrolled })}>
			{matches && <LogoMobile className={s.logo} />}
			<div className={s.navbarLeft}>
				<Logo />
				<ul>
					{menuItems.map((item, index) => (
						<li key={index} onClick={() => handleScrollIntoView(item.section)}>
							{item.label}
						</li>
					))}
				</ul>
				<Flex className={s.navbarLang}>
					<Box
						className={s.navbarLangItem}
						onClick={() => router.push("/")}
					>
						<Image src={IconRu} alt={"uz"} width={20} height={20} />
					</Box>
					<Box
						className={s.navbarLangItem}
						onClick={() => router.push("/main-eng")}
					>
						<Image src={IconEng} alt={"uz"} width={20} height={20} />
					</Box>
					<Box
						className={s.navbarLangItem}
						onClick={() => router.push("/main-uz")}
					>
						<Image src={IconUz} alt={"uz"} width={20} height={20} />
					</Box>
				</Flex>
			</div>
			<Anchor href={"tel:+998981706000"} className={s.tel}>
				<IconPhone />
				+998 (98) 170 - 60 - 00
			</Anchor>
		</div>
	)
}
