export function initPresetsComparison() {
	const sliders = document.querySelectorAll('.before-after')

	sliders.forEach(slider => {
		const handle = slider.querySelector('.before-after__handle')

		if (!handle) return

		let isDragging = false

		function updatePosition(clientX) {
			const rect = slider.getBoundingClientRect()
			const x = clientX - rect.left
			const percent = (x / rect.width) * 100
			const limitedPercent = Math.min(100, Math.max(0, percent))

			slider.style.setProperty('--position', `${limitedPercent}%`)
		}

		handle.addEventListener('pointerdown', event => {
			isDragging = true
			handle.setPointerCapture(event.pointerId)
			updatePosition(event.clientX)
		})

		handle.addEventListener('pointermove', event => {
			if (!isDragging) return

			updatePosition(event.clientX)
		})

		handle.addEventListener('pointerup', event => {
			isDragging = false
			handle.releasePointerCapture(event.pointerId)
		})

		handle.addEventListener('pointercancel', () => {
			isDragging = false
		})
	})
}
