
import Swiper, { Navigation, Thumbs, Pagination } from 'swiper';

import "../../scss/base/swiper.scss";

function initSliders() {

   if ('.hero__slider-home') {
      const heroSliderSpeed = 400;
      const bodyStyles = window.getComputedStyle(document.body);
      const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed'); //get
            
      document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');//set

      const heroSliderNav = new Swiper('.hero__slider-home', {

         modules: [Navigation, Pagination],
         slidesPerView: 1,
         loop: true,

         speed: heroSliderSpeed,

        // autoplay: {
        //    delay: 1000,
        // },

         navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
          },

          pagination: {
            el: '.hero__pag',
            type: 'bullets',
            clickable: true,
          },

          on: {
            init: function () {
               const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');
               paginationBullets.forEach(el => {
                  el.innerHTML = `<span class="hero__bar"></span>`
               });
            }
          }
      });
};

//!==================================================================================================

	if (document.querySelector('.projects__slider')) {

		new Swiper('.projects__slider', {

			modules: [Navigation],

			slidesPerView: 3,
			spaceBetween: 30,
			speed: 400,

			loop: true,

         navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
          },
		

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
		});
	}

//!=============================================================================

   if (document.querySelector('.clients__slider')) {

		new Swiper('.clients__slider', {

			modules: [Navigation],

			slidesPerView: 1,
			spaceBetween: 30,
			//autoHeight: true,
			speed: 200,
			loop: true,

         navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
          },

		});
	}

   //*----------------------------------------------------------------------------------------------------
  
   if ('.hero-slider-nav') {

      const heroSliderNav = new Swiper('.hero-slider-nav', {

			slidesPerView: 10,
			spaceBetween: 20,
         freeMode: true,
         watchSlidesProgress: true,

		});
	
//!=========================================================================

   if (document.querySelector('.hero-slider__slider',)) {

   const heroSlider = new Swiper('.hero-slider__slider', {

			modules: [Navigation, Thumbs],
         //loop: true,
			spaceBetween: 20,
         navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
          },

          thumbs: {
            swiper: heroSliderNav,
          },

		      });
	      }
      }

      //!==========================================================================================

      if (document.querySelector('.history__slider',)) {

      const historySlider = new Swiper('.history__slider', {

            modules: [Navigation],
            loop: true,
            slidesPerView: 1,
            spaceBetween: 15,
            navigation: {
               nextEl: ".button-next",
               prevEl: ".button-prev",
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
   }

//!============================================================================================

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

	initSliders();

//	initSlidersScroll();
});