import { Text } from "@mantine/core"
import React from "react"

import s from "./styles.module.scss"

interface IProps {
	text: string
}

export const SectionLabel = ({ text }: IProps) => {
	return (
		<div className={s.wrapper}>
			<div className={s.text}>
				<Text>{text}</Text>
			</div>
		</div>
	)
}
