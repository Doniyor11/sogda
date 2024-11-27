import Image1 from "@//shared/assets/images/partner-1.png"
import Image2 from "@//shared/assets/images/partner-2.png"
import Image3 from "@//shared/assets/images/partner-3.png"
import Image4 from "@//shared/assets/images/partner-4.png"
import Image5 from "@//shared/assets/images/partner-5.png"
import { Box, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import s from "./styles.module.scss"

export const Partners = () => {
	return (
		<div className={s.partners}>
			<Text component={"p"} className={s.partnersTitle}>
				Партнеры
			</Text>
			<Box className={s.partnersImg}>
					<Box className={s.partnersImgItem}>
						<Image src={Image1} alt={""} width={"335"} height={"95"} />
					</Box>
					<Box className={s.partnersImgItem}>
						<Image src={Image2} alt={""} width={"275"} height={"136"} />
					</Box>
					<Box className={s.partnersImgItem}>
						<Image src={Image3} alt={""} width={"374"} height={"136"} />
					</Box>
					<Box className={s.partnersImgItem}>
						<Image src={Image4} alt={""} width={"407"} height={"97"} />
					</Box>
					<Box className={s.partnersImgItem}>
						<Image src={Image5} alt={""} width={"166"} height={"136"} />
					</Box>
			</Box>
		</div>
	)
}
