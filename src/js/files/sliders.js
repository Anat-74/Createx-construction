/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {

	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.projects__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.projects__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			//observer: true,
			//observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			//autoHeight: true,
			//speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
         //rewind: true,
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
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
		
			// Брейкпоінти
			breakpoints: {
            320: {
					slidesPerView: 2,
					spaceBetween: 5,
					autoHeight: true,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 8,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			
			// Події
			on: {

			}
		});
	}
//=============================================================================
   if (document.querySelector('.clients__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.clients__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			//observer: true,
			//observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			//autoHeight: true,
			//speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
         //rewind: true,
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
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
         navigation: {
            nextEl: '.clients-button-next',
            prevEl: '.clients-button-prev',
          },
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}

   //-----------------------------------------------------
  
   if ('.hero-slider-nav') { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
      const heroSliderNav = new Swiper('.hero-slider-nav', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			slidesPerView: 10,
			spaceBetween: 20,
         freeMode: true,
         watchSlidesProgress: true,

		});
	

   if (document.querySelector('.hero-slider__slider',)) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
   const heroSlider = new Swiper('.hero-slider__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Thumbs],
         //loop: true,
			//slidesPerView: 1,
			spaceBetween: 20,
         navigation: {
            nextEl: ".hero-slider__next",
            prevEl: ".hero-slider__prev",
          },

          thumbs: {
            swiper: heroSliderNav,
          },

		      });
	      }
      }

      if (document.querySelector('.history__slider',)) { // Вказуємо склас потрібного слайдера
         // Створюємо слайдер
      const historySlider = new Swiper('.history__slider', { // Вказуємо склас потрібного слайдера
            // Підключаємо модулі слайдера
            // для конкретного випадку
            modules: [Navigation],
            loop: true,
            slidesPerView: 1,
            spaceBetween: 15,
            navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
            },
         });

         historySlider.on('slideChange', function () {
            presentBtn.forEach(el => {
               el.classList.remove('present__btn--active')
            });
            document.querySelector(`.present__btn[data-index="${historySlider.realIndex}"]`).classList.add('present__btn--active');
          });

         const presentBtn = document.querySelectorAll('.present__btn');
         presentBtn.forEach((el, idx) => {
            el.setAttribute('data-index', idx);
            el.addEventListener('click', (e) => {
               const index = e.currentTarget.dataset.index;

               presentBtn.forEach(el => {
                  el.classList.remove('present__btn--active')
               });

               e.currentTarget.classList.add('present__btn--active');
               historySlider.slideTo(index);
            });
         });

      };

   };

//=============================================================================
//const heroSlider = document.querySelector('.hero-slider__slider');
//const heroSliderNav = document.querySelector('.hero-slider-nav__slider');
//if(heroSlider) {
//const workSlider = new Swiper('.hero-slider-nav__slider', {
//   spaceBetween: 20,
//   slidesPerView: 10,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
//
//   new Swiper('.hero-slider__slider', {
//   spaceBetween: 20,
//   slidesPerView: 1,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: workSlider,
//   },
// });
//}



// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});