export function initBookTabs() {
	const tabs = document.querySelectorAll('.book__tab')
	const hiddenInput = document.querySelector('#session_type')

	if (!tabs.length || !hiddenInput) return

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			tabs.forEach((t) => t.classList.remove('is-active'))

			tab.classList.add('is-active')

			hiddenInput.value = tab.dataset.value
		})
	})
}
