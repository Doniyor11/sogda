import IconEmail from "@//shared/assets/images/mail.png"
import IconPhone from "@//shared/assets/images/phone.png"
import ImageUser1 from "@//shared/assets/images/user1.png"
import ImageUser2 from "@//shared/assets/images/user2.png"
import ImageUser3 from "@//shared/assets/images/user3.png"
import ImageUser4 from "@//shared/assets/images/user4.png"
import ImageSmall1 from "@//shared/assets/images/user-small1.png"
import ImageSmall2 from "@//shared/assets/images/user-small2.png"
import ImageSmall3 from "@//shared/assets/images/user-small3.png"
import ImageSmall4 from "@//shared/assets/images/user-small4.png"
import { Box, Flex, Tabs, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import s from "./styles.module.scss"

const userSmallImages = [
	{
		id: 1,
		src: ImageSmall1,
		alt: "user image 1",
		value: "1",
	},
	{
		id: 2,
		src: ImageSmall2,
		alt: "user image 2",
		value: "2",
	},
	{
		id: 3,
		src: ImageSmall3,
		alt: "user image 3",
		value: "3",
	},
	{
		id: 4,
		src: ImageSmall4,
		alt: "user image 4",
		value: "4",
	},
]

export const ManagementTeamEng = () => {
	const matches = useMediaQuery("(max-width: 992px)")
	return (
		<div className={cx(s.management, "container")}>
			<Text component={"p"} className={s.managementTitle}>
				Управленческая команда
			</Text>
			<Tabs orientation={matches ? "horizontal" : "vertical"} defaultValue="1">
				<Tabs.List>
					{userSmallImages.map((item) => (
						<Tabs.Tab value={item.value}>
							<Box key={item.id} className={s.managementUserSmallItem}>
								<Image src={item.src} alt={item.alt} width={136} height={136} />
							</Box>
						</Tabs.Tab>
					))}
				</Tabs.List>

				<Tabs.Panel value="1">
					<Box className={s.managementUser}>
						<Box className={s.managementUserImage}>
							<Image
								src={ImageUser1}
								alt={"user image"}
								width={460}
								height={540}
							/>
						</Box>
						<Box className={s.managementUserInfo}>
							<Flex
								direction={"column"}
								gap={matches ? "30px" : "50px"}
								mb={matches ? "30px" : "50px"}
							>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Director
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Saddulaev Ozod
									</Text>
									<Text component={"p"} className={s.managementUserInfo}>
										Founder and sole founder of the company
									</Text>
								</Box>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Education
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Graduated from Samarkand Institute of Economics and Service in 2012
									</Text>
								</Box>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Specialty
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Economy
									</Text>
								</Box>
								<Text component={"h3"} className={s.managementUserTitle}>
									19 years of experience in entrepreneurial activity
								</Text>
							</Flex>
							<Flex
								gap={matches ? "10px" : "72px"}
								direction={matches ? "column" : "row"}
							>
								<Text className={s.managementUserPhone}>
									<Image
										src={IconPhone}
										alt={"phone icon"}
										width={28}
										height={28}
									/>
									+998 90 270 60 00
								</Text>
								<Text className={s.managementUserPhone}>
									<Image
										src={IconEmail}
										alt={"phone icon"}
										width={28}
										height={28}
									/>
									o_sadullaev@sogda-united.uz
								</Text>
							</Flex>
						</Box>
					</Box>
				</Tabs.Panel>
				<Tabs.Panel value="2">
					<Box className={s.managementUser}>
						<Box className={s.managementUserImage}>
							<Image
								src={ImageUser2}
								alt={"user image"}
								width={460}
								height={540}
							/>
						</Box>
						<Box className={s.managementUserInfo}>
							<Flex
								direction={"column"}
								gap={matches ? "30px" : "50px"}
								mb={matches ? "30px" : "50px"}
							>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Deputy Director, Marketing Manager
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Turdiyev Farhod
									</Text>
								</Box>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Education
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Graduated from SamSAR in 2008
									</Text>
								</Box>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Specialty
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Finance
									</Text>
								</Box>
								<Text component={"h3"} className={s.managementUserTitle}>
									Work experience: 12 years
								</Text>
							</Flex>
							<Flex
								gap={matches ? "10px" : "72px"}
								direction={matches ? "column" : "row"}
							>
								<Text className={s.managementUserPhone}>
									<Image
										src={IconPhone}
										alt={"phone icon"}
										width={28}
										height={28}
									/>
									+998 90 067 59 39
								</Text>
								<Text className={s.managementUserPhone}>
									<Image
										src={IconEmail}
										alt={"phone icon"}
										width={28}
										height={28}
									/>
									f_turdiev@sogda-united.uz
								</Text>
							</Flex>
						</Box>
					</Box>
				</Tabs.Panel>
				<Tabs.Panel value="3">
					<Box className={s.managementUser}>
						<Box className={s.managementUserImage}>
							<Image
								src={ImageUser3}
								alt={"user image"}
								width={460}
								height={540}
							/>
						</Box>
						<Box className={s.managementUserInfo}>
							<Flex
								direction={"column"}
								gap={matches ? "30px" : "50px"}
								mb={matches ? "30px" : "50px"}
							>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Company representative in EU countries
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Saddulaev Ozod
									</Text>
								</Box>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Education
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										In 2002, he graduated from a vocational college and
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										in 2006 graduated from Yamasa Okazaki Institute, Japan
									</Text>
								</Box>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Specialty
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Accountant-Auditor/Interpreter
									</Text>
								</Box>
								<Text component={"h3"} className={s.managementUserTitle}>
									Work experience: 14 years
								</Text>
							</Flex>
							<Flex
								gap={matches ? "10px" : "72px"}
								direction={matches ? "column" : "row"}
							>
								<Text className={s.managementUserPhone}>
									<Image
										src={IconPhone}
										alt={"phone icon"}
										width={28}
										height={28}
									/>
									+43676 428 68 81
								</Text>
								<Text className={s.managementUserPhone}>
									<Image
										src={IconEmail}
										alt={"phone icon"}
										width={28}
										height={28}
									/>
									r_akhmedjanov@sogda-united.uz
								</Text>
							</Flex>
						</Box>
					</Box>
				</Tabs.Panel>
				<Tabs.Panel value="4">
					<Box className={s.managementUser}>
						<Box className={s.managementUserImage}>
							<Image
								src={ImageUser4}
								alt={"user image"}
								width={460}
								height={540}
							/>
						</Box>
						<Box className={s.managementUserInfo}>
							<Flex
								direction={"column"}
								gap={matches ? "30px" : "50px"}
								mb={matches ? "30px" : "50px"}
							>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Accountant
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Ibragimov Dilshoda
									</Text>
								</Box>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Education
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										In 2003, she graduated from the Business School at
										Samarkand Institute of Economics and Service
									</Text>
								</Box>
								<Box>
									<Text component={"p"} className={s.managementUserInfo}>
										Specialty
									</Text>
									<Text component={"h3"} className={s.managementUserTitle}>
										Accountant
									</Text>
								</Box>
								<Text component={"h3"} className={s.managementUserTitle}>
									Work experience: 10 years
								</Text>
							</Flex>
							<Flex
								gap={matches ? "10px" : "72px"}
								direction={matches ? "column" : "row"}
							>
								<Text className={s.managementUserPhone}>
									<Image
										src={IconPhone}
										alt={"phone icon"}
										width={28}
										height={28}
									/>
									+998 93 720 60 13
								</Text>
								<Text className={s.managementUserPhone}>
									<Image
										src={IconEmail}
										alt={"phone icon"}
										width={28}
										height={28}
									/>
									buxgalter@sogda-united.uz
								</Text>
							</Flex>
						</Box>
					</Box>
				</Tabs.Panel>
			</Tabs>
		</div>
	)
}
