'use client'

import { useState } from 'react'
import { Globe } from 'lucide-react'
import styles from './languageSelector.module.scss'
import { useRouter } from "next/router"
interface Language {
	code: string
	name: string
	onClick?: () => void
}


export default function LanguageSelector() {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedLang, setSelectedLang] = useState<Language | null>(null)
	const router = useRouter()

	const languages: Language[] = [
		{ code: 'uz', name: "O'zbekcha", onClick: () => router.push("/") },
		{ code: 'ru', name: 'Русский', onClick: () => router.push("/main-uz") },
		{ code: 'en', name: 'English', onClick: () => router.push("/main-eng") },
	]

	return (
		<div className={styles.container}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={styles.button}
			>
				<Globe size={16} />
				{selectedLang ? selectedLang.name : languages[0].name}
			</button>

			{isOpen && (
				<div className={styles.dropdown}>
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => {
								setSelectedLang(lang)
								setIsOpen(false)
								lang.onClick && lang.onClick()
							}}
							className={`${styles.option} ${selectedLang?.code === lang.code ? styles.selected : ''}`}
						>
							{lang.name}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

