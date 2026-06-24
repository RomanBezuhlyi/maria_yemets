import Swiper from 'swiper'
// import { Navigation, Scrollbar } from 'swiper/modules'
import 'swiper/css'

export function initSliders() {
	if (document.querySelector('.swiper')) {
		new Swiper('.swiper', {
			// modules: [Navigation, Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 16,
			speed: 800,
			// centeredSlides: true,
			// loop: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			// scrollbar: {
			// 	el: '.services__scrollbar',
			// 	draggable: true,
			// },

			// Кнопки "вліво/вправо"
			// navigation: {
			// 	prevEl: '.swiper-btn-prev',
			// 	nextEl: '.swiper-btn-next',
			// },

			// // Брейкпоінти
			// breakpoints: {
			// 	768: {
			// 		slidesPerView: 2.5,
			// 		spaceBetween: 9,
			// 	},
			// 	992: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 9,
			// 	},
			// 	1268: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 9,
			// 	},
			// },

			// Події
			on: {},
		})
	}
}
