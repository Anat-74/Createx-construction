// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js"  ;



window.addEventListener("click", function(e){
   const rowItemsBtn = document.querySelectorAll('.row-icons__items-btn')
   const imageItems = document.querySelectorAll('.columns-image__items')
   const load = document.querySelector('.portfolio__load')

   if(e.target.classList.contains('row-icons__items-btn')) {

      rowItemsBtn.forEach((el) => {
         el.classList.remove('row-icons__items-btn--active')
      })

      e.target.classList.toggle('row-icons__items-btn--active')

      if(e.target.dataset.tab==='tab-1') {
         imageItems.forEach((el) => {
            el.classList.remove('none')
        })
   
      } else {
         imageItems.forEach((el) => {
            el.classList.add('none')
        })
       }
      const contentTab = document.querySelector('#' + e.target.dataset.tab)
      contentTab.classList.remove('none')
   }

   if(e.target.classList.contains('portfolio__btn')) {

      imageItems.forEach((el) => {
         el.classList.remove('none')
     })

     rowItemsBtn.forEach((el) => {
      el.classList.remove('row-icons__items-btn--active')
     })

     const activeBtn = document.querySelector('#active')
     activeBtn.classList.add('row-icons__items-btn--active')
   }

})

/*
const itemsBtn = document.querySelectorAll('[data-tab]')
const imageItems = document.querySelectorAll('.columns-image__items')
const load = document.querySelector('.portfolio__load')

itemsBtn.forEach((item) => {
   item.addEventListener('click', function() {
      if(this.classList.contains('row-icons__items-btn')) {
         itemsBtn.forEach((el) => {
            el.classList.remove('row-icons__items-btn--active')
         })
         this.classList.toggle('row-icons__items-btn--active')
      }


     if(this.dataset.tab === 'tab-1') {
      imageItems.forEach((el) => {
         el.classList.remove('none')
      })
   }else {
      imageItems.forEach((el) => {
         el.classList.add('none')
        })
   }
   
   const contentTab = document.querySelector('#' + this.dataset.tab)
   contentTab.classList.remove('none')

   })
})
*/






function removeClasses(elements, className) {
   elements.forEach(el => {
      el.classList.remove(className)
   })
}



























//!==================================================================================================

const circles = document.querySelectorAll('.list__circle');
circles.forEach(el => {
  if (el.dataset.percentage == 'true') {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.list__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let full = el.dataset.full;
    let value = el.dataset.value;
    let percentageProgress = Math.floor(value / full * 100);
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.list__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let percent = el.dataset.percent;
    let percentageProgress = Math.floor(percent);
    valueBlock.textContent = percent + '%';
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }
});

//!=================================================================================================

const videoBlock = document.querySelector('.video-block');
const video = document.querySelector('video');
const btnPlay = document.querySelector('.video-block__btn-play');

if(btnPlay ) {
btnPlay.addEventListener('click', () => {
   videoBlock.classList.add('video-block--played');
   video.play();
   video.controls = true;
   btnPlay.classList.add('video-block__btn-play--played');
});


video.onpause = function() {
   videoBlock.classList.remove('video-block--played');
   video.controls = false;
   btnPlay.classList.remove('video-block__btn-play--played');
   };
};

//!================================================================================================

const toTop = document.querySelector('.to-top');
const heroHeight = document.querySelector('.hero').offsetHeight;

const isVisibleToTop = (y = 0) => {
   if(y >= heroHeight) {
      toTop.classList.add('to-top--visible');
   } else {
      toTop.classList.remove('to-top--visible');
   }
}

isVisibleToTop(window.scrollY);

window.addEventListener('scroll', () => {
let y = window.scrollY;
isVisibleToTop(y);
});