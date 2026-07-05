import '@/styles/main.scss'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import { initAccordion } from '@/js/modules/accordion'
import { initScrollAnimations } from '@/js/modules/animation'
import { initDropdown } from '@/js/modules/dropdown'
import { initHeaderScroll } from '@/js/modules/headerScroll'
import { initHeroSlider } from '@/js/modules/heroSlider'
import { initBookTabs } from '@/js/modules/initBookTabs'
import { initMenu } from '@/js/modules/menu'
import { initPhoneMask } from '@/js/modules/phoneMask'
import { initSliders } from '@/js/modules/slider'
import { Fancybox } from '@fancyapps/ui/dist/fancybox/'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { initPresetsComparison } from './src/js/modules/comparison'

document.addEventListener('DOMContentLoaded', () => {
	const lenis = new Lenis({
		autoRaf: true,
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
	initPresetsComparison()
})
