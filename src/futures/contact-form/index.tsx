import { Button, Input, Text } from "@mantine/core"
import React, { FC, useState } from "react"
import { IMaskInput } from "react-imask"
import { toast } from "react-toastify"

import IconOne from "@/shared/assets/images/icon-phone-blue.svg"
import { SectionLabel } from "@/shared/ui/section-label"

import s from "./styles.module.scss"

interface IContactFormProps {
	sectionLabel: string
	title: string
	name: string
	namePlaceholder: string
	phone: string
	phonePlaceholder: string
	emailInput: string
	emailPlaceholder: string
	button: string
}

export const ContactForm: FC<IContactFormProps> = ({
	sectionLabel,
	title,
	name,
	namePlaceholder,
	phone,
	phonePlaceholder,
	emailInput,
	emailPlaceholder,
	button,
}) => {
	const [fullName, setFullName] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("+998")
	const [email, setEmail] = useState("")
	const [loading, setLoading] = useState(false)
	const handleSubmit = async (e: any) => {
		e.preventDefault()
		setLoading(true)
		const formData = {
			fullName,
			phoneNumber,
			email,
		}
		try {
			await console.log(formData)
			toast.success("Данные успешно отправлены!")
		} catch (error: any) {
			toast.error("Ошибка отправки данных:", error)
		} finally {
			setLoading(false)
			setFullName("")
			setPhoneNumber("")
			setEmail("")
		}
	}

	return (
		<div className={s.wrapper}>
			<SectionLabel text={sectionLabel} />
			<div className={s.box}>
				<Text className={s.title}>{title}</Text>

				<form onSubmit={handleSubmit}>
					<Input.Wrapper className={s.inputWrapper} label={name}>
						<Input
							placeholder={namePlaceholder}
							value={fullName}
							onChange={(e: any) => setFullName(e.currentTarget.value)}
						/>
					</Input.Wrapper>
					<Input.Wrapper className={s.inputWrapper} label={phone}>
						<Input
							placeholder={phonePlaceholder}
							component={IMaskInput as any}
							mask="+998 (00) 000-00-00"
							value={phoneNumber}
							onChange={(e: any) => setPhoneNumber(e.currentTarget.value)}
						/>
					</Input.Wrapper>
					<Input.Wrapper className={s.inputWrapper} label={emailInput}>
						<Input
							placeholder={emailPlaceholder}
							value={email}
							onChange={(e: any) => setEmail(e.currentTarget.value)}
							type={"email"}
						/>
					</Input.Wrapper>

					<Button
						className={s.btn}
						leftSection={<IconOne />}
						loading={loading}
						type={"submit"}
					>
						{button}
					</Button>
				</form>
			</div>
		</div>
	)
}
