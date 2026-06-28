import '@/styles/main.scss'

import { Fancybox } from '@fancyapps/ui/dist/fancybox/'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { initSliders } from './src/js/modules/slider'
// import { initPhoneMask } from './src/js/modules/phoneMask'
// import { initAccordion } from '@/js/modules/accordion'
import { initMenu } from '@/js/modules/menu'
import { initDropdown } from '@/js/modules/dropdown'
// import { initScrollAnimations } from '@/js/modules/animation'
import { initHeaderScroll } from './src/js/modules/headerScroll'
import { initHeroSlider } from './src/js/modules/heroSlider'

document.addEventListener('DOMContentLoaded', () => {
	initHeaderScroll()
	initHeroSlider()
	initMenu({
		burgerSelectorOpen: '.header__burger',
		burgerSelectorClose: '.header__menu-close',
		menuSelector: '.header__menu',
		activeClass: 'is-open',
		lockClass: 'lock',
	})
	initDropdown({
		itemSelector: '.header__dropdown',
		triggerSelector: '.open-dropdown',
		activeClass: 'is-open',
	})
	Fancybox.bind('[data-fancybox]')
	// initScrollAnimations()
	initSliders()
	// initPhoneMask('.number-mask')
	// initAccordion({
	// 	rootSelector: '.faq',
	// 	itemSelector: '.faq__item',
	// 	triggerSelector: '.faq__item-head',
	// 	contentSelector: '.faq__item-body',
	// 	activeClass: 'is-open',
	// })
})
