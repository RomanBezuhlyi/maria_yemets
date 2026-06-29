import '@/styles/main.scss'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import { Fancybox } from '@fancyapps/ui/dist/fancybox/'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { initSliders } from '@/js/modules/slider'
import { initPhoneMask } from '@/js/modules/phoneMask'
import { initAccordion } from '@/js/modules/accordion'
import { initMenu } from '@/js/modules/menu'
import { initDropdown } from '@/js/modules/dropdown'
import { initScrollAnimations } from '@/js/modules/animation'
import { initHeaderScroll } from '@/js/modules/headerScroll'
import { initHeroSlider } from '@/js/modules/heroSlider'
import { initBookTabs } from '@/js/modules/initBookTabs'

document.addEventListener('DOMContentLoaded', () => {
	const lenis = new Lenis({
		autoRaf: true,
	})
	lenis.on('scroll', (e) => {
		console.log(e)
	})
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
	initScrollAnimations()
	initSliders()
	initPhoneMask('.number-mask')
	initAccordion({
		rootSelector: '.faq',
		itemSelector: '.faq__item',
		triggerSelector: '.faq__item-top',
		contentSelector: '.faq__item-body',
		activeClass: 'is-open',
	})
	initBookTabs()
})
