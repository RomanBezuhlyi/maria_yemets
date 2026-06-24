export function initMenu({
	burgerSelectorOpen,
	burgerSelectorClose,
	menuSelector,
	activeClass,
	lockClass,
}) {
	if (
		!burgerSelectorOpen ||
		!burgerSelectorClose ||
		!menuSelector ||
		!activeClass ||
		!lockClass
	) {
		console.warn('initMenu: missing required options')
		return
	}

	const openBtn = document.querySelector(burgerSelectorOpen)
	const closeBtn = document.querySelector(burgerSelectorClose)
	const menu = document.querySelector(menuSelector)

	if (!openBtn || !closeBtn || !menu) return

	openBtn.addEventListener('click', () => {
		menu.classList.add(activeClass)
		openBtn.classList.add(activeClass)
		document.body.classList.add(lockClass)
	})

	closeBtn.addEventListener('click', () => {
		menu.classList.remove(activeClass)
		openBtn.classList.remove(activeClass)
		document.body.classList.remove(lockClass)
	})
}
