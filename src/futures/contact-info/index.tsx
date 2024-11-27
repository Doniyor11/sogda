import { Anchor, Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import IconThree from "@/shared/assets/images/icon-mail.svg"
import IconTwo from "@/shared/assets/images/icon-phone-blue.svg"
import IconOne from "@/shared/assets/images/icon-pin.svg"
import { SectionLabel } from "@/shared/ui/section-label"

import s from "./styles.module.scss"

interface IContactInfoProps {
	title: string
	sectionLabel: string
	addressLabel: string
	address: string
	phoneLabel: string
	phone: string
	emailLabel: string
	email: string
	phoneCall: string
	emailWrite: string
}

export const ContactInfo: React.FC<IContactInfoProps> = ({
	title,
	sectionLabel,
	addressLabel,
	address,
	phoneLabel,
	phone,
	emailLabel,
	email,
	phoneCall,
	emailWrite,
}) => {
	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<div className={s.wrapper}>
			<SectionLabel text={sectionLabel} />
			<div className={s.box}>
				<Text className={s.title}>{title}</Text>
				<div className={s.boxItem}>
					<IconOne />
					<Box>
						<Text className={s.label}>{addressLabel}</Text>
						<Text className={s.text}>{address}</Text>
					</Box>
				</div>
				<div className={s.boxItem}>
					<IconTwo />
					<Box>
						<Text className={s.label}>{phoneLabel}</Text>
						<Anchor href={`tel:${phone}`} className={s.text}>
							{phone}
						</Anchor>
					</Box>
				</div>
				<div className={s.boxItem}>
					<IconThree />
					<Box>
						<Text className={s.label}>{emailLabel}</Text>
						<Anchor href={`mailto:${email}`} className={s.text}>
							{email}
						</Anchor>
					</Box>
				</div>
				<Flex gap={20} mt={24} direction={matches ? "column" : "row"}>
					<Anchor href={`tel:${phone}`} className={s.btn}>
						<IconTwo />
						{phoneCall}
					</Anchor>
					<Anchor href={`mailto:${email}`} className={s.btn}>
						<IconThree />
						{emailWrite}
					</Anchor>
				</Flex>
			</div>
		</div>
	)
}
