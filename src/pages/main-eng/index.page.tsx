import { ContactForm, ContactInfo, Partners } from "@/futures"
import { AboutSectionEng } from "@/futures/about-section/about-eng.tsx"
import { ManagementTeamEng } from "@/futures/management-team/index-en.tsx"
import { MainSectionEng } from "@/futures/mian-section/index-eng.tsx"
import { Flex } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Head from "next/head"
import React from "react"

import { Navbar } from "@/widgets/layout/navbar"

import s from "./styles.module.scss"
import { Footer } from "@/widgets/layout/footer"


const HomePage = () => {
	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<>
			<Head>
				<title>SOGDA UNITED TRADE</title>
				<meta
					name="description"
					content="Wholesale sales of medical devices and components
for dairy products. Work with the industry leader
in Uzbekistan and neighboring countries."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar
					menuItems={[
						{ label: "About us", section: 1 },
						{ label: "Team", section: 2 },
						{ label: "Contacts", section: 3 },
						{
							label: "We're on the map",
							section: 4,
						},
					]}
				/>
				<MainSectionEng />
				<AboutSectionEng />
				<Partners pageTitle={"Partners"} />
				<ManagementTeamEng />
				<Flex
					id={"section3"}
					pt={matches ? 32 : 120}
					className={"container"}
					gap={22}
					align={"stretch"}
					direction={matches ? "column" : "row"}
				>
					<ContactInfo
						sectionLabel="Contact us"
						title="Contacts"
						addressLabel={"Address:"}
						address="Republic of Uzbekistan, Samarkand, M. Haydarov str. 29"
						phoneLabel={"Phone:"}
						phone="+998981706000"
						emailLabel={"Email:"}
						email="info@sogda-united.uz"
						phoneCall={"Call the company"}
						emailWrite={"To write"}
					/>
					<ContactForm
						sectionLabel={"Or leave your number"}
						title={"Leave a request"}
						name={"Name:"}
						namePlaceholder={"Виктор"}
						phone={"Phone:"}
						phonePlaceholder={"Phone:"}
						emailInput={"Email:"}
						emailPlaceholder={"mail@yandex.ru"}
						button={"Call the company"}
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
			</main>
			<Footer
				aboutText="About us"
				employeesText="Employees"
				contactsText="Contacts"
				mapText="We're on the map"
				addressText="Republic of Uzbekistan, Samarkand, M. Haydarov str. 29"
				phoneNumber="+998981706000"
				phoneLabel="+998 (98) 170 - 60 - 00"
				email="info@example.com"
				emailLabel="info@example.com"
				copyrightText="2024, SOGDA UNITED TRADE LLC"
				privacyPolicyText="Privacy Policy"
			/>
		</>
	)
}

export default HomePage
