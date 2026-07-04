import Swiper from 'swiper'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'

export function initSliders() {
	if (document.querySelector('.services-swiper')) {
		new Swiper('.services-swiper', {
			modules: [Navigation, Scrollbar, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 16,
			speed: 800,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},

			scrollbar: {
				el: '.services__scrollbar',
				draggable: true,
			},

			navigation: {
				prevEl: '.services__nav-prev',
				nextEl: '.services__nav-next',
			},

			breakpoints: {
				768: {
					slidesPerView: 2.5,
					spaceBetween: 24,
				},
				992: {
					slidesPerView: 3.5,
					spaceBetween: 24,
				},
				1080: {
					slidesPerView: 4.2,
					spaceBetween: 24,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 24,
				},
			},
		})
	}
}
