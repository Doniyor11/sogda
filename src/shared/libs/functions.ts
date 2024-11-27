export const handleScrollIntoView = (id: number) => {
	const block = document.querySelector(`#section${id}`)!
	block.scrollIntoView({ behavior: "smooth", block: "start" })
}
