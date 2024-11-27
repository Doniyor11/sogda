import { ContactForm, ContactInfo, Partners } from "@/futures"
import { AboutSectionUz } from "@/futures/about-section/about-uz.tsx"
import { ManagementTeamUz } from "@/futures/management-team/index-uz.tsx"
import { MainSectionUz } from "@/futures/mian-section/index-uz.tsx"
import { Flex } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Head from "next/head"

import { Navbar } from "@/widgets/layout/navbar"

import s from "./styles.module.scss"
import React from "react"
import { Footer } from "@/widgets/layout/footer"

const HomePage = () => {
	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<>
			<Head>
				<title>SOGDA UNITED TRADE</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar
					menuItems={[
						{ label: "Biz haqimizda", section: 1 },
						{ label: "Jamoa", section: 2 },
						{ label: "Kontaktlar", section: 3 },
						{
							label: "Biz xaritadamiz",
							section: 4,
						},
					]}
				/>
				<MainSectionUz />
				<AboutSectionUz />
				<Partners pageTitle={"Hamkorlar"} />
				<ManagementTeamUz />
				<Flex
					id={"section3"}
					pt={matches ? 32 : 120}
					className={"container"}
					gap={22}
					align={"stretch"}
					direction={matches ? "column" : "row"}
				>
					<ContactInfo
						sectionLabel="Biz bilan bog'laning"
						title="Kontaktlar"
						addressLabel={"Manzil:"}
						address="O‘zbekiston Respublikasi, Samarqand shahri, M. Haydarov ko‘chasi, 29-uy"
						phoneLabel={"Telefon:"}
						phone="+998981706000"
						emailLabel={"Pochta:"}
						email="info@sogda-united.uz"
						phoneCall={"Qo'ng'iroq qiling"}
						emailWrite={"Pochtaga yozing"}
					/>
					<ContactForm
						sectionLabel={'Yoki raqamingizni qoldiring'}
						title={'Arizani qoldiring'}
						name={'Ism:'}
						namePlaceholder={'Виктор'}
						phone={'Telefon:'}
						phonePlaceholder={'Telefon:'}
						emailInput={'Pochta:'}
						emailPlaceholder={'mail@yandex.ru'}
						button={'Qo\'ng\'iroq qiling'}
					/>
				</Flex>

				<div id={"section4"} className={cx(s.map, "container")}>
					<iframe
						src="https://yandex.ru/map-widget/v1/?um=constructor%3A4299f47342194d25a47eaca19c02e6ee37349296ae11f81d2af71a35dc17b34c&amp;source=constructor"
						width="100%"
						height="400"
						frameBorder="0"
					></iframe>
				</div>
				<Footer
					aboutText="Biz haqimizda"
					employeesText="Xodimlar"
					contactsText="Kontaktlar"
					mapText="Biz xaritadamiz"
					addressText="Samarqand shahri, O'zbekiston Respublikasi"
					phoneNumber="+998981706000"
					phoneLabel="+998 (98) 170 - 60 - 00"
					email="info@example.com"
					emailLabel="info@example.com"
					copyrightText="2024, SOGDA UNITED TRADE LLC"
					privacyPolicyText="Maxfiylik siyosati"
				/>

			</main>
		</>
	)
}

export default HomePage