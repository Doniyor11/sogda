import { Button, Input, Text } from "@mantine/core"
import React, { useState } from "react"
import { IMaskInput } from "react-imask"
import { toast } from "react-toastify"

import IconOne from "@/shared/assets/images/icon-phone-blue.svg"
import { SectionLabel } from "@/shared/ui/section-label"

import s from "./styles.module.scss"

export const ContactForm = () => {
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
			<SectionLabel text={"Или оставьте свой номер"} />
			<div className={s.box}>
				<Text className={s.title}>Оставить заявку</Text>

				<form onSubmit={handleSubmit}>
					<Input.Wrapper className={s.inputWrapper} label={"Имя:"}>
						<Input
							placeholder={"Виктор"}
							value={fullName}
							onChange={(e: any) => setFullName(e.currentTarget.value)}
						/>
					</Input.Wrapper>
					<Input.Wrapper className={s.inputWrapper} label={"Телефон:"}>
						<Input
							placeholder={"Телефон"}
							component={IMaskInput as any}
							mask="+998 (00) 000-00-00"
							value={phoneNumber}
							onChange={(e: any) => setPhoneNumber(e.currentTarget.value)}
						/>
					</Input.Wrapper>
					<Input.Wrapper className={s.inputWrapper} label={"Почта:"}>
						<Input
							placeholder={"mail@yandex.ru"}
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
						Отправить
					</Button>
				</form>
			</div>
		</div>
	)
}
