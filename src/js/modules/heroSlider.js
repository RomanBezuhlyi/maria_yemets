export function initHeroSlider() {
	const images = document.querySelectorAll('.hero__img')
	const texts = document.querySelectorAll('.hero__text')

	if (!images.length || !texts.length) return

	let current = 0

	setInterval(() => {
		images[current].classList.remove('active')
		texts[current].classList.remove('active')

		current = (current + 1) % images.length

		images[current].classList.add('active')
		texts[current].classList.add('active')
	}, 3000)
}
